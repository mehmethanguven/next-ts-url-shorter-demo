import React from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

const Header = () => {
  return (
    <div>
      {/* Nav Container */}
      <nav className="container relative mx-auto p-6">
        {/* Flex container for all items */}
        <DesktopMenu />

        {/* Mobile menu */}
        <MobileMenu />
      </nav>
    </div>
  )
}

export default Header
