import React, { useState } from "react";
import ProfileCard from "../../components/Card/ProfileCard";
import PasswordInput from "../../components/Form/PasswordInput";
import SearchBar from "../../components/Form/SearchBar";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import { profileData } from "../../data/dummyProfile";

const People = () => {

    const [search, setSearch] = useState("");

  return (
    <NormalPageLayout>
      <Title pageTitle="People" description={"Find people that you want to share"} />
      <SearchBar placeholder={"Jeremi Herodian"} searchData={() => {}} extraClass={"max-w-screen-lg mt-10"} setSearch={setSearch} />
      <div className="grid gap-10 grid-cols-3 max-w-screen-lg mt-20">
          {
              profileData.map(({photo, name, description, userID}) => {
                  return (
                    <ProfileCard imageLink={photo} name={name} description={description} key={userID}/>
                  )
              })
          }
      </div>
    </NormalPageLayout>
  );
};

export default People;
