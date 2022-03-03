import { Good } from "../../service/data/getDataGood";
import { Icon } from "../icon/Icon";
import GoodCard from "./GoodCard";

interface CardLayoutProp {
  cardList: Good[];
}

const CardLayout = ({ cardList }: CardLayoutProp) => {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {cardList.length > 0 ? (
          cardList.map((good) => {
            return <GoodCard good={good} />;
          })
        ) : (
          <div className="flex h-[60vh] flex-col items-center justify-center">
            <Icon url="/icon/warning.png" width={80} height={80} className="pl-1 cursor-pointer" />
            <span className="text-xs text-oldgray6">검색 결과 없음</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CardLayout;
