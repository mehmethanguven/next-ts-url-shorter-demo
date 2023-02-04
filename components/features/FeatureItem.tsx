import { IFeatureItem } from '@/types/index'
import Image from 'next/image'
import React from 'react'

type Props = {
  item: IFeatureItem
}

const FeatureItem = ({ item: { imageUrl, title, desc } }: Props) => {
  return (
    <div className="relative mb-24 flex flex-col space-y-6 rounded-lg bg-white p-6 last:mb-0 md:w-1/3 md:last:mt-16 md:even:mt-8">
      {/* <!-- Image Positioning --> */}
      <div className="absolute left-1/2 -top-10 -ml-10 md:left-16">
        {/* <!-- Image Container For Background & Center --> */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
          <Image
            height={0}
            width={0}
            className="w-auto"
            src={imageUrl}
            alt=""
          />
        </div>
      </div>
      <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
        {title}
      </h5>
      <p className="text-center text-gray-400 md:text-left">{desc}</p>
    </div>
  )
}

export default FeatureItem
