import React from 'react'

interface RoundChipProp {
  text: string
  isChecked?: boolean
}

const RoundChip = ({ text = '', isChecked }: RoundChipProp) => {
  return (
    <div className="m-1 flex min-w-[5rem] justify-evenly rounded-[18px] border bg-white p-1">
      <div className={`${isChecked ? ' text-accent' : 'text-black'} text-sm`}>
        {text}
      </div>
    </div>
  )
}

export default RoundChip
