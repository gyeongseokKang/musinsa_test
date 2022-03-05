import {
  FilterQuery,
  filterQueryState,
  filterState,
} from "../../store/FilterStore";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import FilterChipGroup from "./FilterChipGroup";
import FilterChipSelecter from "./FilterChipSelecter";
import FilterSearcher from "./FilterSearcher";
import SearchChip from "../chip/searchChip/SearchChip";
import { getFilteredGoods } from "../../utils/getFilteredGoods";
import { goodState } from "../../store/GoodStore";

const FilterSelecter = () => {
  const goodList = useRecoilValue(goodState);
  const filterList = useRecoilValue(filterState);
  const [filterQuery, setFilterQuery] = useRecoilState(filterQueryState);

  const [filteredGoods, setFilteredGoods] = useState(goodList);
  const [isSearch, setisSearch] = useState(false);

  useEffect(() => {
    setFilteredGoods(getFilteredGoods(goodList, filterList));
  }, [filterList, goodList]);

  const toggleSearch = () => {
    setisSearch((preValue) => !preValue);
  };

  const updateFilterQuery = (filterQuery: FilterQuery) => {
    setFilterQuery(filterQuery);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div onClick={toggleSearch}>
          <SearchChip
            isChecked={filterQuery.query.length > 0}
            isFocused={isSearch}
          />
        </div>
        <FilterChipSelecter />
      </div>
      {isSearch ? (
        <FilterSearcher
          filterQuery={filterQuery}
          updateQuery={updateFilterQuery}
          autoCompleteList={filteredGoods.map((item) => {
            return {
              name: item.goodsName,
              brand: item.brandName,
              code: item.goodsNo,
            };
          })}
        />
      ) : (
        <FilterChipGroup />
      )}
    </>
  );
};

export default FilterSelecter;
