import React from 'react'

interface RectangleChipProp {
  text: string
  leftItem?: React.ReactNode
}

const RectangleChip = ({ text = '', leftItem }: RectangleChipProp) => {
  return (
    <div className="m-1 flex min-w-[5rem] items-center justify-evenly rounded-[4px] border bg-accent p-1">
      <span className={`flex justify-between text-xs text-white`}>
        {text}
        {leftItem && <span className="pl-2">{leftItem}</span>}
      </span>
    </div>
  )
}

export default RectangleChip
