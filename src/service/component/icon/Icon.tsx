import * as React from 'react'

import Image from 'next/image'

export interface IconProp {
  url: string
  width?: number
  height?: number
  className?: string
  priority?: boolean

  onClick?: () => void
}

export const Icon = ({
  url,
  width = 24,
  height = 24,
  className,
  priority,
  onClick,
}: IconProp) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'contain',
      }}
    >
      <Image
        src={url}
        width={width}
        height={height}
        priority={priority}
        layout={'fixed'}
      />
    </div>
  )
}
