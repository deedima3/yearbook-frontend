import React from "react";
import birthdayApi from "../api/birthday/birthdayApi";
import ProfileCard from "../components/Card/ProfileCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Title from "../components/SEO/Title";
import CustomTitle from "../components/Title/CustomTitle";
import { UserPage } from "../interfaces/pages.interfaces";

interface Props {
  posts: UserPage[];
}

const Birthday = ({posts} : Props) => {
  return (
    <NormalPageLayout>
      <Title pageTitle="Birthday" description="Special week for special people"/>
      <CustomTitle title={"This Week"} outlineWidth={15} extraClasses="text-9xl font-black font-Inter mt-5" />
      <CustomTitle title={"Birthday Celebration"} extraClasses="text-6xl font-black font-Inter flex flex-col items-center"  desc="There’s no too late to say happy birthday, but only if it’s within a week" outlineWidth={15} />
      <Title pageTitle="Birthday" description={"Say Happy Birthday to your friend"} />
      <div className="grid gap-10 grid-cols-3 max-w-screen-lg mt-16">
        {posts ? posts.map(({ id, owner, nickname, header_img, description }) => {
          return (
            <ProfileCard
              imageLink={header_img}
              name={nickname}
              description={description}
              key={id} userID={owner.toString()}/>
          );
        }) : <div className="flex justify-center w-full"> No Birthday!! </div> }
      </div>
    </NormalPageLayout>
  );
};

export async function getStaticProps() {
  const posts = await birthdayApi.getAllBirthday();
  return {
    props: {
      posts,
    },
    revalidate : 30
  }
}

export default Birthday;
