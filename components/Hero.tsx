import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id="Hero">
      <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row">
        {/* Content container */}
        <div className="mb-44 flex flex-col space-y-10 lg:mb-52 lg:mt-16 lg:w-1/2">
          <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-left lg:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-left">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="rounded-full bg-cyan-400 px-10 py-5 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-180 mx-auto mb-24 lg:mb-0 lg:w-1/2">
          <Image
            src="/images/illustration-working.svg"
            alt=""
            width={0}
            height={0}
            className="w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
