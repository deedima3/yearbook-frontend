import type { NextPage } from "next";
import ProfileCard from "../components/Card/ProfileCard";
import TwitsCard from "../components/Card/TwitsCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/SEO/Title";

const Home: NextPage = () => {
  return (
    <>
    <Title pageTitle="Home" description={"Remmember the great times"}/>
      <NormalPageLayout>
        <TwitsCard
          title={"Susan Hit a Switch"}
          postedOn={"28 Desember 2002"}
          description={"An invisible connection system; a mystical portal between Illustrator and After Effects.Transfer shapes as you need them without importing, converting or redrawing. The vector workflow you imagined between apps created by the same company..."}
          upvoted={false}
          downvoted={false}
          upvoteCount={55}
          downvoteCount={100}
        />
      </NormalPageLayout>
    </>
  );
};

export default Home;
