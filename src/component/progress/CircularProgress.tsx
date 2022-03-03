import React from "react";
import Image from "next/image";

interface CircularProgressProp {
  className?: string;
  children?: React.ReactNode;
}

const CircularProgress = ({}: CircularProgressProp) => {
  return (
    <div className="flex justify-center m-2">
      <div className="max-h-[32px] max-w-[32px] animate-spin ">
        <Image src={"/icon/loading.png"} width={32} height={32} priority={true} layout={"fixed"} />
      </div>
    </div>
  );
};

export default CircularProgress;
