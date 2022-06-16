import React, { useState } from "react";
import HeaderCard from "../../components/Card/HeaderCard";
import TwitsCard from "../../components/Card/TwitsCard";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import CustomLinkButton from "../../components/Button/CustomLinkButton";
import pagesApi from "../../api/pages/pagesApi";
import { UserPage } from "../../interfaces/pages.interfaces";
import birthdayApii from "../../api/birthday/birthdayApi";
import birthdayApi from "../../api/birthday/birthdayApi";
import postApi from "../../api/post/postApi";
import { EditorState, convertFromRaw, ContentState } from "draft-js";
import { Twits } from "../../interfaces/twitsInterfaces";
import Modal from "../../components/Modals/Modal";
import BirthdayCard from "../../components/Card/BirthdayCard";
import { useModal } from "../../hooks/show/useModal";

interface Props {
  posts: any;
  filteredPageData: any;
  birthday : boolean;
}

const PersonDetail = ({ posts, filteredPageData, birthday }: Props) => {
  let articleState: EditorState;

  const checkValidJSON = () => {
    try {
      JSON.parse(filteredPageData.description);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (checkValidJSON()) {
    articleState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(filteredPageData.description))
    );
  } else {
    articleState = EditorState.createWithContent(
      ContentState.createFromText(filteredPageData.description)
    );
  }
  const [show, setShow, handleClose, handleOpen] = useModal();

  if(birthday){
    handleOpen();
  }

  return (
    <NormalPageLayout>
      <Title
        pageTitle={filteredPageData && filteredPageData.name}
        description={filteredPageData && filteredPageData.description}
      />
      <div className="flex justify-center mt-8 w-full">
        <div className="flex flex-col justify-center max-w-screen-lg w-full">
          <HeaderCard
            imageLink={filteredPageData.header_img}
            name={filteredPageData.nickname}
            description={articleState}
          />
          <div className="flex justify-between items-center mx-5 my-10">
            <div className="flex justify-between items-center gap-8">
              <CustomLinkButton href={"/"}>UPVOTE</CustomLinkButton>
              <CustomLinkButton href={"/"}>DOWNVOTE</CustomLinkButton>
            </div>
            <CustomLinkButton href={`/editor/${filteredPageData.id}`}>
              SEND STORY
            </CustomLinkButton>
          </div>
          <div className="grid gap-5 grid-row-3">
            {posts &&
              posts.map(
                (
                  { title, content, pages, postID, upvote, downvote }: Twits,
                  index: number
                ) => {
                  return (
                    <TwitsCard
                      title={title}
                      description={content}
                      pages={pages}
                      postID={postID}
                      upvoteCount={upvote}
                      downvoteCount={downvote}
                      key={index}
                    />
                  );
                }
              )}
          </div>
        </div>
      </div>
      <Modal show={show} onClose={handleClose}>
        <BirthdayCard
          imageLink={filteredPageData.header_img}
          name={filteredPageData && filteredPageData.name}
        />
      </Modal>
    </NormalPageLayout>
  );
};

export async function getStaticProps({ params }: any) {
  const pageData: UserPage[] = await pagesApi.getAllPages();
  const filteredPageData = pageData.filter((page) => page.userID == params.id)[0];
  const posts = await postApi.getPostByID(
    pageData.filter((page) => page.userID == params.id)[0].userID
  );
  const birthday = await birthdayApi.checkIfBirthday(
    pageData.filter((page) => page.userID == params.id)[0].userID.toString()
  );

  return {
    props: {
      filteredPageData,
      posts,
      birthday,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pages: UserPage[] = await pagesApi.getAllPages();
  return {
    paths: pages.map((page) => ({
      params: {
        id: page.userID.toString(),
      },
    })),
    fallback: "blocking",
  };
}

export default PersonDetail;
