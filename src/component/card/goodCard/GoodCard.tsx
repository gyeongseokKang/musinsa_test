import { Good } from "../../../service/data/getDataGood";
import Image from "next/image";
import ImgWithEmpty from "../../image/ImgWithEmpty";
import React from "react";
import { getNumberWithComma } from "../../../utils/getNumberWithComma";
import { useRouter } from "next/router";

interface GoodCardProp {
  good: Good;
  className?: string;
}

const GoodCard = ({ good, className = "" }: GoodCardProp) => {
  const router = useRouter();

  const goGoodLink = () => {
    router.push(good.linkUrl);
  };

  return (
    <div
      className={`h-[366px] w-[188px] cursor-pointer ${className}`}
      onClick={goGoodLink}
    >
      <div className="h-[240px]">
        <div className="relative">
          <ImgWithEmpty
            className={`h-[226px] w-[188px] ${
              good.isSoldOut && "bg-saleOut opacity-20"
            }`}
            url={good.imageUrl}
          />
          <div className="relative top-[-18px] left-[9px] flex min-h-[32px] justify-start">
            {good.isExclusive ? (
              <span className="inline-flex bg-[#18A286] p-2 text-xs text-white">
                단독
              </span>
            ) : (
              <span className="inline-flex p-2 text-xs text-white"></span>
            )}
          </div>
        </div>
        {good.isSoldOut && (
          <div className="relative top-[-258px] flex h-[226px] w-[188px] items-center justify-center">
            <Image
              src={"/icon/soldout_text.png"}
              layout="fixed"
              width={120}
              height={22}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start p-1 text-left">
        <span className="text-[11px]">{good.brandName}</span>
        <span className="min-h-[40px] text-left text-sm font-bold line-clamp-2">
          {good.goodsName}
        </span>
        <div className="flex justify-between">
          <span className="font-bold">{`${getNumberWithComma(
            good.price
          )}원`}</span>
          {good.isSale && (
            <span className="text-[#FF0000]">{`${good.saleRate}%`}</span>
          )}
        </div>
        {good.isSale && (
          <span className="flex text-xs line-through text-oldgray6">{`${getNumberWithComma(
            good.normalPrice
          )}원`}</span>
        )}
      </div>
    </div>
  );
};

export default React.memo(GoodCard);
