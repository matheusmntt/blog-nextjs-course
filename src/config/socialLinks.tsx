import {
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  TwitterIcon,
} from '@/components/Icons'

import { MainNavType } from '@/models'

export const socialLinksConfig: MainNavType = {
  mainNav: [
    {
      title: 'Linkedin',
      href: '#',
      icon: <LinkedinIcon size={28} />,
    },
    {
      title: 'Github',
      href: '#',
      icon: <GithubIcon size={28} />,
    },
    {
      title: 'Youtube',
      href: '#',
      icon: <YoutubeIcon size={28} />,
    },
    {
      title: 'Twitter',
      href: '#',
      icon: <TwitterIcon size={28} />,
    },
  ],
}
