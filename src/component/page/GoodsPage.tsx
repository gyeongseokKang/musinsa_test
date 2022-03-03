import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Good } from "../../service/data/getDataGood";
import { filterQueryState, filterState } from "../../store/FilterStore";
import SearchChip from "../chip/SearchChip";
import HorizontalDivider from "../divider/HorizontalDivider";
import FilterGoods from "../filter/FilterGoods";
import FilterLayout from "../filter/FilterLayout";
import FilterSearcher from "../filter/FilterSearcher";
import FilterSelecter from "../filter/FilterSelecter";

interface GoodsPageProp {
  goods: Good[];
}

const GoodsPage = ({ goods }: GoodsPageProp) => {
  const filterList = useRecoilValue(filterState);
  const [filterQuery, setFilterQuery] = useRecoilState(filterQueryState);

  const [filteredGoods, setFilteredGoods] = useState(goods);
  const [isSearch, setisSearch] = useState(false);

  useEffect(() => {
    let newFilteredGoods = [...goods];
    filterList.forEach((filter) => {
      if (filter.isApply && filter.name === "세일상품") {
        newFilteredGoods = newFilteredGoods.filter((item) => item.isSale);
      }
      if (filter.isApply && filter.name === "단독상품") {
        newFilteredGoods = newFilteredGoods.filter((item) => item.isExclusive);
      }

      if (!filter.isApply && filter.name === "품절포함") {
        newFilteredGoods = newFilteredGoods.filter((item) => !item.isSoldOut);
      }
    });
    setFilteredGoods(newFilteredGoods);
  }, [filterList, goods]);

  const toggleSearch = () => {
    setisSearch((preValue) => !preValue);
  };

  const updateFilterQuery = (query: string) => {
    setFilterQuery(query);
  };

  const GoodsPageVAProp: GoodsPageVAProp = {
    isSearch: isSearch,
    filteredGoods: filteredGoods,
    filterQuery: filterQuery,
    updateFilterQuery: updateFilterQuery,
    toggleSearch: toggleSearch,
  };

  return <GoodsPageView {...GoodsPageVAProp} />;
};

interface GoodsPageVAProp {
  isSearch: boolean;

  filteredGoods: Good[];
  filterQuery: string;
  toggleSearch: () => void;
  updateFilterQuery: (query: string) => void;
}

export const GoodsPageView = ({
  isSearch,
  filteredGoods,
  filterQuery,
  toggleSearch,
  updateFilterQuery,
}: GoodsPageVAProp) => {
  if (filteredGoods === undefined) return <div>loading!!@</div>;

  return (
    <>
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
          autoCompleteList={filteredGoods.flat().map((item) => {
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
      <HorizontalDivider className="min-h-[10px] w-full bg-oldgray3" />
      <FilterGoods goods={filteredGoods} />
    </>
  );
};

export default GoodsPage;
