import React, { SyntheticEvent } from "react";

interface ImgWithEmptyProp {
  url: string;
  className?: string | undefined;
  altText?: string;
  onClick?: () => void;
}

const ImgWithEmpty = ({
  url = "",
  altText,
  className = "",
  onClick,
}: ImgWithEmptyProp) => {
  return (
    <img
      className={className}
      src={url}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/img/empty_good.png";
      }}
      alt={altText}
      onClick={onClick}
    />
  );
};

export default ImgWithEmpty;
