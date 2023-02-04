import Image from 'next/image'
import { CompanyMenu } from './CompanyMenu'
import { FeaturesMenu } from './FeaturesMenu'
import { ResourcesMenu } from './ResourcesMenu'
import { SocialContainter } from './SocialContainer'

export const Footer = () => {
  return (
    <footer className="bg-veryDarkViolet py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
        {/* <!-- Logo --> */}
        <Image
          height={0}
          width={0}
          className="w-auto"
          src="images/logo.svg"
          alt=""
        />

        {/* <!-- Menus Container --> */}
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
          {/* <!-- Menu 1 --> */}
          <FeaturesMenu />

          {/* <!-- Menu 2 --> */}
          <ResourcesMenu />

          {/* <!-- Menu 3 --> */}
          <CompanyMenu />
        </div>

        {/* <!-- Social Container --> */}
        <SocialContainter />
      </div>
    </footer>
  )
}
