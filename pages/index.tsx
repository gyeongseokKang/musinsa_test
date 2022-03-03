import { Good, getDataGood } from "../src/service/data/getDataGood";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import TopBar from "../src/component/navigator/TopBar";
import GoodsPage from "../src/component/page/GoodsPage";

const Home: NextPage = () => {
  const [dataGoods, setDataGoods] = useState<Good[] | undefined>();

  useEffect(() => {
    const loadDataGood = async () => {
      const response = await getDataGood();
      setDataGoods(response?.flat());
    };
    loadDataGood();
  }, []);

  const HomeVAProp: HomeVAProp = {
    dataGoods: dataGoods,
  };

  return <HomeView {...HomeVAProp} />;
};

interface HomeVAProp {
  dataGoods: Good[] | undefined;
}

export const HomeView = ({ dataGoods }: HomeVAProp) => {
  if (dataGoods === undefined) return <div>loading!!@</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>무신사 스토어</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col items-center justify-start flex-1 w-full h-full text-center">
        <GoodsPage goods={dataGoods} />
      </main>
    </div>
  );
};

export default Home;
