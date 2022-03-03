import { Good } from "../service/data/getDataGood";
import { FilterItem } from "../store/FilterStore";

export const getFilteredGoods = (goods: Good[], filterList: FilterItem[], itemIdList?: number[]) => {
  let filteredGoods = [...goods];
  filterList.forEach((filter) => {
    if (filter.isApply && filter.name === "세일상품") {
      filteredGoods = filteredGoods.filter((item) => item.isSale);
    }
    if (filter.isApply && filter.name === "단독상품") {
      filteredGoods = filteredGoods.filter((item) => item.isExclusive);
    }

    if (!filter.isApply && filter.name === "품절포함") {
      filteredGoods = filteredGoods.filter((item) => !item.isSoldOut);
    }
  });

  if (itemIdList) {
    filteredGoods = filteredGoods.filter((item) => itemIdList.includes(item.goodsNo));
  }
  return filteredGoods;
};
