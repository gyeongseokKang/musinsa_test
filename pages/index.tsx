import { Good, getDataGood } from "../src/service/data/getDataGood";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import RectangleChip from "../src/service/component/chip/RectangleChip";
import RoundChip from "../src/service/component/chip/RoundChip";
import TopBar from "../src/service/component/navigator/TopBar";
import FilterSelecter from "../src/service/component/filter/FilterSelecter";
import FilterLayout from "../src/service/component/filter/FilterLayout";
import SearchChip from "../src/service/component/chip/SearchChip";
import { useRecoilState } from "recoil";
import { filterQueryState } from "../src/store/FilterStore";
import FilterSearcher from "../src/service/component/filter/FilterSearcher";

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

export const HomeView = ({ isSearch, dataGoods, filterQuery, toggleSearch, updateFilterQuery }: HomeVAProp) => {
  if (dataGoods === undefined) return <div>loading!!@</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col items-center justify-start flex-1 w-full h-full px-20 text-center">
        <div className="flex items-center justify-center">
          <div onClick={toggleSearch}>
            <SearchChip isChecked={filterQuery.length > 0} isFocused={isSearch} />
          </div>
          <FilterSelecter />
        </div>
        {isSearch ? (
          <FilterSearcher
            query={filterQuery}
            updateQuery={updateFilterQuery}
            autoCompleteList={dataGoods.flat().map((item) => {
              return { name: item.goodsName, brand: item.brandName, code: item.goodsNo };
            })}
          />
        ) : (
          <FilterLayout />
        )}
      </main>
    </div>
  );
};

export default Home;
