import React, { useState } from "react";
import HeaderCard from "../../components/Card/HeaderCard";
import TwitsCard from "../../components/Card/TwitsCard";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import { twitsData } from "../../data/twitsDummy";
import CustomLinkButton from "../../components/Button/CustomLinkButton";
import pagesApi from "../../api/pages/pagesApi";
import { UserPage } from "../../interfaces/pages.interfaces";
import birthdayApii from "../../api/birthday/birthdayApi";
import birthdayApi from "../../api/birthday/birthdayApi";
import postApi from "../../api/post/postApi";
import { EditorState, convertFromRaw, ContentState } from "draft-js";

const PersonDetail = ({}) => {
  let articleState : EditorState

  const checkValidJSON = () => {
      try{
          JSON.parse(article)
          return true
      }
      catch(e){
          return false
      }
  }

  if(checkValidJSON()){
      articleState = EditorState.createWithContent(convertFromRaw((JSON.parse(article))))
  }else{
      articleState = EditorState.createWithContent(ContentState.createFromText(article))
  }
  return (
    <NormalPageLayout>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col justify-center">
           <HeaderCard 
               imageLink={'/Modal.png'} 
               name={"Yulia Damayanti"} 
               description={"An invisible connection system; a mystical portal between Illustrator and After Effects.Transfer shapes as you need them without importing, converting or redrawing."}
           />
            <div className="flex justify-between items-center mx-5 my-10">
            <div className="flex justify-between items-center gap-8">
                <CustomLinkButton href={"/"}>UPVOTE</CustomLinkButton>
                <CustomLinkButton href={"/"}>DOWNVOTE</CustomLinkButton>
                </div>
                <CustomLinkButton href={"/"}>SEND STORY</CustomLinkButton>
            </div>
            <div className="grid gap-5 grid-row-3">
                {twitsData.map(({title, postedOn, description, upvoted, downvoted, upvoteCount, downvoteCount}) => {
                    return (
                        <TwitsCard 
                           title={title} 
                           postedOn={postedOn} 
                           description={description} 
                           upvoted={upvoted} 
                           downvoted={downvoted} 
                           upvoteCount={upvoteCount} 
                           downvoteCount={downvoteCount} />
                        )
                    })
                }
            </div>
        </div>
      </div>
    </NormalPageLayout>
  );
};

export async function getStaticProps() {
  const pageData = await pagesApi.getPagesByID(id);
  const posts = await postApi.getAllPost();
  const birthday = await birthdayApi.checkIfBirthday(id);
  return {
    props: {
      posts,
    },
    revalidate : 30
  }
}

export async function getStaticPaths() {
  const pages : UserPage[] = await pagesApi.getAllPages();
    return {
      paths: pages.map(page => ({
        params: {
          id: page.id,
        },
      })),
      fallback: "blocking"
    }
  }

export default PersonDetail;