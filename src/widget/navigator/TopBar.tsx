import Image from "next/image";
import React from "react";

interface TopBarProp {
  children?: React.ReactNode;
}

const TopBar = ({ children }: TopBarProp) => {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-white">
      <div className="flex min-h-[50px] w-full items-center justify-center">
        <Image
          className="cursor-pointer"
          src={"/logo/logo_musinsa.png"}
          layout="fixed"
          width={95}
          height={16}
          alt="musinsa_logo"
        />
      </div>
      {children}
    </header>
  );
};

export default TopBar;
