import type { NextPage } from "next";
import CustomButton from "../components/Button/CustomButton";
import CustomLinkButton from "../components/Button/CustomLinkButton";
import ProfileCard from "../components/Card/ProfileCard";
import TwitsCard from "../components/Card/TwitsCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/SEO/Title";
import CustomTitle from "../components/Title/CustomTitle";

const Home: NextPage = () => {
  return (
      <NormalPageLayout>
      <Title pageTitle="Home" description={"Remmember the great times"} />
        <div className="max-w-screen-xl w-full flex relative justify-center mt-10">
          <img src="Modal.png" alt="Modal Image PNG" className="animate-floating"/>
          <div className="absolute flex flex-col top-0 left-0">
            <CustomTitle
              title={"Letter"}
              extraClasses="text-9xl font-bold"
              outlineWidth={15}
            />
            <CustomTitle
              title={"from"}
              extraClasses="text-6xl font-bold"
              outlineWidth={15}
            />
          </div>
          <div className="absolute flex flex-col bottom-0 right-0">
            <CustomTitle
              title={"The"}
              extraClasses="text-6xl font-bold"
              outlineWidth={15}
            />
            <CustomTitle
              title={"Good Times"}
              extraClasses="text-9xl font-bold"
              outlineWidth={15}
            />
          </div>
        </div>
        <CustomLinkButton href={"/people"} extraClasses="text-4xl font-IBM mt-20">
          POST YOUR STORY
        </CustomLinkButton>
      </NormalPageLayout>
  );
};

export default Home;
