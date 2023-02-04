import { IFeatureItem, INavLink } from '../types'

export const navLinks: INavLink[] = [
  {
    title: 'features',
    url: '#features',
  },
  {
    title: 'pricing',
    url: '#pricing',
  },
  {
    title: 'resources',
    url: '#resources',
  },
]

export const mobileNavLinks: INavLink[] = [
  {
    title: 'features',
    url: '#features',
  },
  {
    title: 'pricing',
    url: '#pricing',
  },
  {
    title: 'resources',
    url: '#resources',
  },
  { title: 'login', url: '#login' },
  { title: 'signup', url: '#signup' },
]

export const featureItems: IFeatureItem[] = [
  {
    title: 'Brand Recognition',
    imageUrl: '/images/icon-brand-recognition.svg',
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: 'Detailed records',
    imageUrl: 'images/icon-detailed-records.svg',
    desc: ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    title: 'Fully customizable',
    imageUrl: '/images/icon-fully-customizable.svg',
    desc: ' Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]
