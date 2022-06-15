import React, { Suspense, useState } from "react";
import ProfileCard from "../../components/Card/ProfileCard";
import PasswordInput from "../../components/Form/PasswordInput";
import SearchBar from "../../components/Form/SearchBar";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import { useSearch } from "../../hooks/data/useSearch";

const People = () => {
  const { search, handleSearch, searchResults, setSearch, isLoading } =
    useSearch();

  return (
    <NormalPageLayout>
      <Title
        pageTitle="People"
        description={"Find people that you want to share"}
      />
      <SearchBar
        placeholder={"Jeremi Herodian"}
        extraClass={"max-w-screen-lg mt-10"}
        setSearch={setSearch}
      />
      <div className="grid gap-10 grid-cols-3 max-w-screen-lg mt-20">
        {searchResults ? (
          searchResults.map(
            ({ header_img, nickname, description, owner }, index) => {
              return (
                <ProfileCard
                  imageLink={header_img}
                  name={nickname}
                  description={description}
                  key={index}
                  userID={owner}
                />
              );
            }
          )
        ) : isLoading ? (
          <div className="">Loading...</div>
        ) : (
          <div className="">No Results</div>
        )}
      </div>
    </NormalPageLayout>
  );
};

export default People;
