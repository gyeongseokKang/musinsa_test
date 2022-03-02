import React from "react";

interface ChipGroupProp {
  className?: string;
  children?: React.ReactNode;
}

const ChipGroup = ({ children, className = "" }: ChipGroupProp) => {
  return <div className={`flex items-center justify-center ${className} select-none`}>{children}</div>;
};

export default ChipGroup;
