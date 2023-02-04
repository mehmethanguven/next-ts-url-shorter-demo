import { ISocialink } from '@/types/index'
import SocialNavItem from './SocialNavItem'

const socialLinks: ISocialink[] = [
  { title: 'facebook', url: '#', imageUrl: 'images/icon-facebook.svg' },
  { title: 'twitter', url: '#', imageUrl: 'images/icon-twitter.svg' },
  { title: 'pinterest', url: '#', imageUrl: 'images/icon-pinterest.svg' },
  { title: 'instagram', url: '#', imageUrl: 'images/icon-instagram.svg' },
]

export const SocialContainter = () => {
  return (
    <div className="flex space-x-6">
      {(socialLinks || []).map((item, id) => (
        <SocialNavItem key={id} {...item} />
      ))}
    </div>
  )
}
