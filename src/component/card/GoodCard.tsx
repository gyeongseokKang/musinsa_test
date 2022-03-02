import { Good } from "../../service/data/getDataGood";
import ImgWithEmpty from "../image/ImgWithEmpty";
import React from "react";

interface GoodCardProp {
  good: Good;
  className?: string;
}

const GoodCard = ({ good, className }: GoodCardProp) => {
  return (
    <div
      className={`flex h-[366px] w-[188px] flex-col items-center justify-center ${className}`}
    >
      <ImgWithEmpty url={good.imageUrl} />
      <div className="flex">단독</div>
      <div className="p-2">
        <div>{good.brandName}</div>
        <div className="font-bold">
          상품명 상품명 상품명 두 줄까지 입력 가능합니다.
        </div>
        <div className="flex justify-between">
          <span className="font-bold">999,999,999원</span>
          <span className="text-[#FF0000]">34%</span>
        </div>
        <div>999,999,999원</div>
      </div>
    </div>
  );
};

export default GoodCard;
