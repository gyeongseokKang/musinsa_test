import React from 'react'

interface ChipGroupProp {
  children?: React.ReactNode
}

const ChipGroup = ({ children }: ChipGroupProp) => {
  return <div className="flex items-center justify-center">{children}</div>
}

export default ChipGroup
