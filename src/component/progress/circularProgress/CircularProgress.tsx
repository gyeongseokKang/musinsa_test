import Image from "next/image";
import React from "react";

interface CircularProgressProp {
  size?: number;
  spin?: boolean;
}

const CircularProgress = ({ size = 32, spin = true }: CircularProgressProp) => {
  return (
    <div className="flex justify-center m-2">
      <div className={`max-h-[32px] max-w-[32px] ${spin && "animate-spin"}`}>
        <Image
          src={"/icon/loading.png"}
          width={size}
          height={size}
          priority={true}
          layout={"fixed"}
        />
      </div>
    </div>
  );
};

export default CircularProgress;
