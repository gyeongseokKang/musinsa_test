import { useEffect, useState } from "react";

import { Good } from "../../service/data/getDataGood";
import GoodCard from "../card/GoodCard";
import { filterState } from "../../store/FilterStore";
import { useRecoilValue } from "recoil";

const FilterGoods = ({ goods }: { goods: Good[] }) => {
  const [filteredGoods, setFilteredGoods] = useState(goods);
  const filterList = useRecoilValue(filterState);

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

  return (
    <div className="flex flex-wrap justify-center ">
      {filteredGoods.map((good) => {
        return <GoodCard good={good} />;
      })}
    </div>
  );
};

export default FilterGoods;
