import { INavLink } from '@/types/index'
import FooterNavItem from './FooterNavItem'

const resourcesMenu: INavLink[] = [
  { title: 'blog', url: '#blog' },
  { title: 'developers', url: '#developers' },
  { title: 'support', url: '#support' },
]

export const ResourcesMenu = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="mb-5 font-bold capitalize text-white">Resources</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {(resourcesMenu || []).map((item, id) => (
          <FooterNavItem key={id} {...item} />
        ))}
      </div>
    </div>
  )
}
