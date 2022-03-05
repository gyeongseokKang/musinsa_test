import { filterQueryState, filterState } from "../../store/FilterStore";
import { useEffect, useState } from "react";

import CardLayout from "../card/CardLayout";
import { Good } from "../../service/data/getDataGood";
import HorizontalDivider from "../divider/horizontalDivider/HorizontalDivider";
import { getFilteredGoods } from "../../utils/getFilteredGoods";
import { goodState } from "../../store/GoodStore";
import { useRecoilValue } from "recoil";

interface GoodsPageProp {}

const GoodsPage = ({}: GoodsPageProp) => {
  const goodList = useRecoilValue(goodState);
  const filterList = useRecoilValue(filterState);
  const { itemIdList } = useRecoilValue(filterQueryState);
  const [filteredGoods, setFilteredGoods] = useState(goodList);

  useEffect(() => {
    setFilteredGoods(getFilteredGoods(goodList, filterList, itemIdList));
  }, [filterList, goodList, itemIdList]);

  const GoodsPageVAProp: GoodsPageVAProp = {
    filteredGoods: filteredGoods,
  };

  return <GoodsPageView {...GoodsPageVAProp} />;
};

interface GoodsPageVAProp {
  filteredGoods: Good[];
}

export const GoodsPageView = ({ filteredGoods }: GoodsPageVAProp) => {
  if (filteredGoods === undefined) return <div>loading!!@</div>;

  return (
    <>
      <HorizontalDivider />
      <CardLayout cardList={filteredGoods} />
    </>
  );
};

export default GoodsPage;
