import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Good } from "../../service/data/getDataGood";
import { filterState } from "../../store/FilterStore";
import { goodState } from "../../store/GoodStore";
import { getFilteredGoods } from "../../utils/getFilteredGoods";
import CardLayout from "../card/CardLayout";
import HorizontalDivider from "../divider/HorizontalDivider";

interface GoodsPageProp {}

const GoodsPage = ({}: GoodsPageProp) => {
  const goodList = useRecoilValue(goodState);
  const filterList = useRecoilValue(filterState);
  const [filteredGoods, setFilteredGoods] = useState(goodList);

  useEffect(() => {
    setFilteredGoods(getFilteredGoods(goodList, filterList));
  }, [filterList, goodList]);

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
      <HorizontalDivider className="min-h-[10px] w-full bg-oldgray3" />
      <CardLayout cardList={filteredGoods} />
    </>
  );
};

export default GoodsPage;
