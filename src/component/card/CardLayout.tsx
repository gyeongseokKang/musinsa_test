import { useEffect, useState } from "react";
import { Good } from "../../service/data/getDataGood";
import InfiniteScroll from "../../utils/hook/InfiniteScroll";
import { Icon } from "../icon/Icon";
import CircularProgress from "../progress/CircularProgress";
import GoodCard from "./GoodCard";

interface CardLayoutProp {
  cardList: Good[];
}

const NUMBERS_PER_PAGE = 4;

const CardLayout = ({ cardList }: CardLayoutProp) => {
  const [currentCardList, setCurrentCardList] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const hasMoreData = currentCardList.length < cardList.length;

  const loadMoreNumbers = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      const nextCardList = cardList.slice((page - 1) * NUMBERS_PER_PAGE, page * NUMBERS_PER_PAGE);
      setCurrentCardList((previous) => [...previous, ...nextCardList]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setPage(1);
    setCurrentCardList([...cardList.slice(0, NUMBERS_PER_PAGE)]);
    loadMoreNumbers();
  }, [cardList]);

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <InfiniteScroll hasMoreData={hasMoreData} isLoading={loading} onBottomHit={loadMoreNumbers} loadOnMount={true}>
          <div className="flex flex-wrap justify-center ">
            {currentCardList.length > 0 ? (
              currentCardList.map((good) => {
                return <GoodCard good={good} />;
              })
            ) : (
              <div className="flex h-[60vh] flex-col items-center justify-center">
                <Icon url="/icon/warning.png" width={80} height={80} className="pl-1 cursor-pointer" />
                <span className="text-xs text-oldgray6">검색 결과 없음</span>
              </div>
            )}
          </div>
        </InfiniteScroll>
        {loading && (
          <div>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};

export default CardLayout;
