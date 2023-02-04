import { navLinks } from '@/data'
import Image from 'next/image'
import NavItem from './DesktopNavItem'

export const DesktopMenu = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Flex container For Logo/Menu */}
      <div className="flex items-center space-x-20">
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt=""
          height={0}
          width={0}
          className="hidden h-8 w-auto md:flex"
        />
        {/* Left menu */}
        <div className="hidden space-x-8 font-bold md:flex">
          {(navLinks || []).map((item, id) => (
            <NavItem key={id} {...item} />
          ))}
        </div>
      </div>
      {/* Right buttons menu */}
      <div className="hidden items-center space-x-6 font-bold text-grayishViolet md:flex">
        <NavItem title="login" url="/login" />
        <NavItem
          title="sign up"
          url="/siqnup"
          className="rounded-full bg-cyan-700 px-8 py-3 font-bold text-white hover:opacity-70"
        />
      </div>
    </div>
  )
}
