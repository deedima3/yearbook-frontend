import React from "react";
import ProfileCard, { ProfileCardProps } from "../components/Card/ProfileCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Title from "../components/SEO/Title";
import CustomTitle from "../components/Title/CustomTitle";
import { teamData } from "../data/ourTeam";

const Team = () => {
  return (
    <NormalPageLayout>
        <Title pageTitle="Our Team" description="Who made this website"/>
      <CustomTitle title={"Meet"} outlineWidth={15} extraClasses="text-5xl font-bold" />
      <CustomTitle title={"The Team"} outlineWidth={15} extraClasses="text-8xl font-bold mt-2" />
      <div className="grid grid-rows-2 grid-flow-col gap-10 w-full max-w-screen-lg mt-10">
        {teamData.map((teamMember: ProfileCardProps, index: number) => {
          return (
            <ProfileCard
              key={index}
              imageLink={teamMember.imageLink}
              name={teamMember.name}
              description={teamMember.description} userID={""}            />
          );
        })}
      </div>
    </NormalPageLayout>
  );
};

export default Team;
