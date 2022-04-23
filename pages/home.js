import Head from "next/head";
import BannerTwo from "../components/BannerTwo";
import PopularGemStones from "../components/PopularGemStones";

const HomePage = () => {
  return (
    <div>
      <BannerTwo />
      <PopularGemStones />
    </div>
  );
};

export default HomePage;
