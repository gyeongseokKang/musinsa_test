import React, { useLayoutEffect, useState } from 'react'

import Image from 'next/image'

interface TopBarProp {}

const TopBar = ({}: TopBarProp) => {
  return (
    <header className="sticky top-0 z-50 flex min-h-[50px] bg-white">
      <div className="flex items-center justify-center w-full px-4">
        <Image
          className="cursor-pointer"
          src={'/logo/logo_musinsa.png'}
          layout="fixed"
          width={95}
          height={16}
        />
      </div>
    </header>
  )
}

export default TopBar
