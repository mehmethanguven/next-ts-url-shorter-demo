import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
type Props = {
  title: string
  url: string
  className?: string
}

const DesktopNavItem = ({ title, url, className }: Props) => {
  return (
    <Link
      href={url}
      className={clsx(
        'capitalize text-grayishViolet hover:text-veryDarkViolet',
        className
      )}
    >
      {title}
    </Link>
  )
}

export default DesktopNavItem
