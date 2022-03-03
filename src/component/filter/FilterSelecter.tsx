import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { filterState, filterQueryState, FilterQuery } from "../../store/FilterStore";
import { goodState } from "../../store/GoodStore";
import { getFilteredGoods } from "../../utils/getFilteredGoods";
import SearchChip from "../chip/SearchChip";
import FilterChipGroup from "./FilterChipGroup";
import FilterSearcher from "./FilterSearcher";
import FilterChipSelecter from "./FilterChipSelecter";

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
          <SearchChip isChecked={filterQuery.query.length > 0} isFocused={isSearch} />
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
