import React, { useState } from "react";
import HeaderCard from "../../components/Card/HeaderCard";
import TwitsCard from "../../components/Card/TwitsCard";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import { twitsData } from "../../data/twitsDummy";
import CustomLinkButton from "../../components/Button/CustomLinkButton";

const PersonDetail = () => {

  return (
    <NormalPageLayout>
      <div className="flex justify-center">
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

export default PersonDetail;