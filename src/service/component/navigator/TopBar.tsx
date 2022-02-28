import React, { useLayoutEffect, useState } from 'react'
import Image from 'next/image'

interface TopBarProp {}

const TopBar = ({}: TopBarProp) => {
  return (
    <header className="sticky top-0 z-50 flex min-h-[60px] bg-white">
      <div className="flex w-full px-4">
        Tobar
        {/* <div className="t flex min-w-[3rem] cursor-pointer p-2 text-black">
          <Image src={'/icons/menu.png'} width={16} height={16} />
        </div>
        <div className="flex justify-center flex-1 ">
          <Image
            className="cursor-pointer"
            src={'/icons/logo/text_logo.png'}
            width={74}
            height={30}
          />
        </div>
        <div className="flex min-w-[3rem] max-w-[3rem]  cursor-pointer">
          <Image src={'/icons/search.png'} />
          <div className="p-2"></div>
          <Image src={'/icons/bucket.png'} />
        </div> */}
      </div>
    </header>
  )
}

export default TopBar
