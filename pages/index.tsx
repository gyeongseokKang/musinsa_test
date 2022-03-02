import { Good, getDataGood } from "../src/service/data/getDataGood";
import { useEffect, useState } from "react";

import FilterLayout from "../src/component/filter/FilterLayout";
import FilterSearcher from "../src/component/filter/FilterSearcher";
import FilterSelecter from "../src/component/filter/FilterSelecter";
import GoodCard from "../src/component/card/GoodCard";
import Head from "next/head";
import type { NextPage } from "next";
import SearchChip from "../src/component/chip/SearchChip";
import TopBar from "../src/component/navigator/TopBar";
import { filterQueryState } from "../src/store/FilterStore";
import { useRecoilState } from "recoil";

const Home: NextPage = () => {
  const [dataGoods, setDataGoods] = useState<Good[] | undefined>();
  const [isSearch, setisSearch] = useState(false);
  const [filterQuery, setFilterQuery] = useRecoilState(filterQueryState);
  useEffect(() => {
    const loadDataGood = async () => {
      const response = await getDataGood();
      setDataGoods(response);
      console.log(response);
    };
    loadDataGood();
  }, []);

  const toggleSearch = () => {
    setisSearch((preValue) => !preValue);
  };

  const updateFilterQuery = (query: string) => {
    setFilterQuery(query);
  };
  const HomeVAProp: HomeVAProp = {
    isSearch: isSearch,
    dataGoods: dataGoods,
    filterQuery: filterQuery,
    updateFilterQuery: updateFilterQuery,
    toggleSearch: toggleSearch,
  };

  return <HomeView {...HomeVAProp} />;
};

interface HomeVAProp {
  isSearch: boolean;
  dataGoods: Good[] | undefined;
  filterQuery: string;
  toggleSearch: () => void;
  updateFilterQuery: (query: string) => void;
}

export const HomeView = ({
  isSearch,
  dataGoods,
  filterQuery,
  toggleSearch,
  updateFilterQuery,
}: HomeVAProp) => {
  if (dataGoods === undefined) return <div>loading!!@</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>무신사 스토어</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex h-full w-full flex-1 flex-col items-center justify-start px-20 text-center">
        <div className="flex items-center justify-center">
          <div onClick={toggleSearch}>
            <SearchChip
              isChecked={filterQuery.length > 0}
              isFocused={isSearch}
            />
          </div>
          <FilterSelecter />
        </div>
        {isSearch ? (
          <FilterSearcher
            query={filterQuery}
            updateQuery={updateFilterQuery}
            autoCompleteList={dataGoods.flat().map((item) => {
              return {
                name: item.goodsName,
                brand: item.brandName,
                code: item.goodsNo,
              };
            })}
          />
        ) : (
          <FilterLayout />
        )}
        <GoodCard good={dataGoods[0]} />
      </main>
    </div>
  );
};

export default Home;
