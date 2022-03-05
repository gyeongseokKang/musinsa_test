import { useEffect, useRef } from "react";

import CircularProgress from "../progress/circularProgress/CircularProgress";
import useIntersectionObserver from "../../utils/hook/useIntersectionObserver";

interface InfiniteScrollProp {
  updateScroll: () => void;
  isFinish: boolean;
  children?: React.ReactNode;
}

const InfiniteScroll = ({
  updateScroll,
  isFinish,
  children,
}: InfiniteScrollProp) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(containerRef, {
    threshold: 0,
  });

  useEffect(() => {
    if (!isFinish) {
      updateScroll();
    }
  }, [entry?.isIntersecting, isFinish]);

  return (
    <div>
      {children}
      <div ref={containerRef}></div>
      {entry?.isIntersecting && !isFinish && (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
