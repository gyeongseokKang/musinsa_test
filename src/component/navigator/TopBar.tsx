import React from "react";

import Image from "next/image";
import FilterSelecter from "../filter/FilterSelecter";

interface TopBarProp {}

const TopBar = ({}: TopBarProp) => {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-white">
      <div className="flex min-h-[50px] w-full items-center justify-center">
        <Image className="cursor-pointer" src={"/logo/logo_musinsa.png"} layout="fixed" width={95} height={16} />
      </div>
      <FilterSelecter />
    </header>
  );
};

export default TopBar;
