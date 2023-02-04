import { featureItems } from '@/data'
import React from 'react'
import FeatureItem from './FeatureItem'

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        {/* <!-- Horizontal Line --> */}
        <div className="absolute top-24 left-16 hidden h-3 w-10/12 bg-cyan-500 md:block"></div>
        {/* <!-- Vertical Line --> */}
        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan-500 md:hidden"></div>
        {(featureItems || []).map((item, id) => (
          <FeatureItem key={id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Features
