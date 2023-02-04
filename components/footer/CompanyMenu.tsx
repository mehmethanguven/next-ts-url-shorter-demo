import { INavLink } from '@/types/index'
import FooterNavItem from './FooterNavItem'

const companyLinks: INavLink[] = [
  { title: 'about', url: '/about' },
  { title: 'our team', url: '/our-team' },
  { title: 'careers', url: '/#careers' },
  { title: 'contact', url: '/#contact' },
]

export const CompanyMenu = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="mb-5 font-bold capitalize text-white">Company</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {(companyLinks || []).map((item, id) => (
          <FooterNavItem key={id} {...item} />
        ))}
      </div>
    </div>
  )
}
