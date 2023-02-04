import Link from 'next/link'
import React from 'react'
type Props = {
  title: string
  url: string
  close: () => void
}

export const MobileNavItem = ({ title, url, close }: Props) => {
  return (
    <Link onClick={close} href={url} className="w-full text-center">
      {title}
    </Link>
  )
}
