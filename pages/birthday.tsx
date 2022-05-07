import React from "react";
import ProfileCard from "../components/Card/ProfileCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Title from "../components/SEO/Title";
import CustomTitle from "../components/Title/CustomTitle";
import { profileData } from "../data/dummyProfile";

const Birthday = () => {
  return (
    <NormalPageLayout>
      <CustomTitle title={"This Week"} outlineWidth={15} extraClasses="text-9xl font-black font-Inter" />
      <CustomTitle title={"Birthday Celebration"} extraClasses="text-6xl font-black font-Inter flex flex-col items-center"  desc="There’s no too late to say happy birthday, but only if it’s within a week" outlineWidth={15} />
      <Title pageTitle="Birthday" description={"Say Happy Birthday to your friend"} />
      <div className="grid gap-10 grid-cols-3 max-w-screen-lg mt-20">
        {profileData.map(({ photo, name, description, userID }) => {
          return (
            <ProfileCard
              imageLink={photo}
              name={name}
              description={description}
              key={userID}
            />
          );
        })}
      </div>
    </NormalPageLayout>
  );
};

export default Birthday;
