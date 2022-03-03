import { getDataGood } from "../src/service/data/getDataGood";
import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import TopBar from "../src/component/navigator/TopBar";
import GoodsPage from "../src/component/page/GoodsPage";
import { goodState } from "../src/store/GoodStore";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>무신사 스토어</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col items-center justify-start flex-1 w-full h-full text-center">
        <GoodsPage />
      </main>
    </div>
  );
};

export default Home;
