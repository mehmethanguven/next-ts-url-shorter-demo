import { INavLink } from '@/types/index'
import FooterNavItem from './FooterNavItem'

const featuresMenu: INavLink[] = [
  { title: 'link shortening', url: '/#link-shortening' },
  { title: 'branded links', url: '/#branded-links' },
  { title: 'analytics', url: '/#analytics' },
]

export const FeaturesMenu = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="mb-5 font-bold capitalize text-white">Features</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {(featuresMenu || []).map((item, id) => (
          <FooterNavItem key={id} {...item} />
        ))}
      </div>
    </div>
  )
}
