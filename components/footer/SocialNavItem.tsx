import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  url: string
  imageUrl: string
}

const SocialNavItem = ({ title, url, imageUrl }: Props) => {
  return (
    <Link href={url}>
      <Image
        src={imageUrl}
        width={0}
        height={0}
        className="ficon w-auto"
        alt={title}
      />
    </Link>
  )
}

export default SocialNavItem
