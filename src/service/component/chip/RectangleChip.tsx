import React from "react";

interface RectangleChipProp {
  text: string;
  leftItem?: React.ReactNode;
}

const RectangleChip = ({ text = "", leftItem }: RectangleChipProp) => {
  return (
    <div className="m-1 flex min-w-[5rem] select-none items-center justify-evenly rounded-[4px] border bg-accent px-2 py-1.5">
      <span className={`flex items-center justify-between whitespace-nowrap text-xs  text-white`}>
        {text}
        {leftItem && <span className="pl-2">{leftItem}</span>}
      </span>
    </div>
  );
};

export default RectangleChip;
