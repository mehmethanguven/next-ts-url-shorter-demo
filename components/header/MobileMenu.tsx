import clsx from 'clsx'
import { mobileNavLinks } from '@/data'
import Image from 'next/image'
import { useState } from 'react'
import { MobileNavItem } from './MobileNavItem'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/images/logo.svg"
        alt=""
        height={0}
        width={0}
        className="h-6 w-auto md:hidden"
      />
      {/* Hamburger menu button */}
      <button
        id="menu-btn"
        className={clsx(
          'hamburger block focus:outline-none lg:hidden',
          open ? 'open' : ''
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        className={clsx(
          'z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6',
          open ? '' : 'hidden'
        )}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
          {(mobileNavLinks || []).map((item, id) => (
            <MobileNavItem close={() => setOpen(false)} key={id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
