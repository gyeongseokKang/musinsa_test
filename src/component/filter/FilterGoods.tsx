import { useEffect, useState } from "react";

import { Good } from "../../service/data/getDataGood";
import GoodCard from "../card/GoodCard";
import { filterState } from "../../store/FilterStore";
import { useRecoilValue } from "recoil";
import { Icon } from "../icon/Icon";

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
      {filteredGoods.length > 0 ? (
        filteredGoods.map((good) => {
          return <GoodCard good={good} />;
        })
      ) : (
        <div className="flex h-[60vh] flex-col items-center justify-center">
          <Icon url="/icon/warning.png" width={80} height={80} className="pl-1 cursor-pointer" />
          <span className="text-xs text-oldgray6">검색 결과 없음</span>
        </div>
      )}
    </div>
  );
};

export default FilterGoods;
