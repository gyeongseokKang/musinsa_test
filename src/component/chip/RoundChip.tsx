import React from "react";

interface RoundChipProp {
  text: string;
  isChecked?: boolean;
}

const RoundChip = ({ text = "", isChecked }: RoundChipProp) => {
  return (
    <div className="m-1 flex min-h-[35px] min-w-[5rem]  select-none items-center justify-evenly whitespace-nowrap rounded-[18px] border bg-white p-1">
      <div className={`${isChecked ? " text-accent" : "text-black"} text-sm`}>
        {text}
      </div>
    </div>
  );
};

export default RoundChip;
