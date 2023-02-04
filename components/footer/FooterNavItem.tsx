import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  url: string
}

const FooterNavItem = ({ title, url }: Props) => {
  return (
    <Link href={url} className="hover:text-cyan capitalize text-grayishViolet">
      {title}
    </Link>
  )
}

export default FooterNavItem
