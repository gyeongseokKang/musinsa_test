import { Icon } from "../../icon/Icon";
import React from "react";

interface SearchChipProp {
  isChecked?: boolean;
  isFocused?: boolean;
}

const SearchChip = ({ isChecked, isFocused }: SearchChipProp) => {
  let textColor = "";
  let bgColor = "";
  if (isFocused) {
    textColor = "text-white";
    bgColor = "bg-accent";
  } else {
    bgColor = "bg-white";
    if (isChecked) {
      textColor = "text-accent";
    } else {
      textColor = "text-black";
    }
  }

  return (
    <div
      className={`m-1 flex min-h-[35px] min-w-[5rem]  items-center justify-evenly whitespace-nowrap rounded-[18px] border  p-1 ${bgColor} cursor-pointer`}
    >
      <div className={`${textColor} flex text-sm`}>
        검색
        <Icon
          url="/icon/search.png"
          width={20}
          height={20}
          className="pl-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchChip;
