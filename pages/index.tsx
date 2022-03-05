import FilterSelecter from "../src/widget/filter/FilterSelecter";
import GoodsPage from "../src/page/GoodsPage";
import Head from "next/head";
import type { NextPage } from "next";
import TopBar from "../src/widget/navigator/TopBar";
import { getDataGood } from "../src/service/data/getDataGood";
import { goodState } from "../src/store/GoodStore";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Home: NextPage = () => {
  const setGoodState = useSetRecoilState(goodState);

  useEffect(() => {
    const loadDataGood = async () => {
      const response = await getDataGood();
      if (response) {
        setGoodState(response.flat());
      }
    };
    loadDataGood();
  }, []);

  const HomeVAProp: HomeVAProp = {};

  return <HomeView {...HomeVAProp} />;
};

interface HomeVAProp {}

export const HomeView = ({}: HomeVAProp) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <Head>
        <title>무신사 스토어</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-2 flex h-full w-screen  max-w-[390px] flex-col justify-center border border-gray-500">
        <TopBar>
          <FilterSelecter />
        </TopBar>
        <main className="flex flex-col items-center flex-1 w-full h-full text-center">
          <GoodsPage />
        </main>
      </div>
    </div>
  );
};

export default Home;
