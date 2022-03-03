import { useEffect, useState } from "react";
import { Good } from "../../service/data/getDataGood";
import { Icon } from "../icon/Icon";
import InfiniteScroll from "../scroll/InfiniteScroll";
import GoodCard from "./GoodCard";

interface CardLayoutProp {
  cardList: Good[];
}

const NUMBERS_PER_PAGE = 2;

const CardLayout = ({ cardList }: CardLayoutProp) => {
  const [currentCardList, setCurrentCardList] = useState<Good[]>([]);
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  const initCardLayout = () => {
    setPage(0);
    setIsFinish(false);
    setCurrentCardList([]);
  };

  const loadMoreCard = () => {
    setTimeout(() => {
      //무한 스크롤 확인을 위한 의도적인 딜레이
      const nextCardList = cardList.slice(
        page * NUMBERS_PER_PAGE,
        (page + 1) * NUMBERS_PER_PAGE
      );
      setPage((page) => page + 1);
      setIsFinish(cardList.length <= page * NUMBERS_PER_PAGE);
      setCurrentCardList((previous) => [...previous, ...nextCardList]);
    }, 300);
  };

  useEffect(() => {
    initCardLayout();
    loadMoreCard();
  }, [cardList]);

  return (
    <InfiniteScroll isFinish={isFinish} updateScroll={loadMoreCard}>
      <div className="flex flex-wrap justify-center">
        {currentCardList.length > 0 ? (
          currentCardList.map((good) => {
            return <GoodCard good={good} />;
          })
        ) : (
          <div className="flex h-[60vh] flex-col items-center justify-center">
            <Icon
              url="/icon/warning.png"
              width={80}
              height={80}
              className="pl-1 cursor-pointer"
            />
            <span className="text-xs text-oldgray6">검색 결과 없음</span>
          </div>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default CardLayout;
