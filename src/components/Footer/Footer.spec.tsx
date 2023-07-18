import { siteConfig } from '@/config'
import { render, screen } from '@testing-library/react'

import { Footer } from './Footer'

const items = [
  {
    href: '/',
    title: 'Home',
  },

  {
    href: '/about',
    title: 'Sobre mim',
  },
]

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer items={items} />)

    const socialMediaSection = screen.getByText(/redes/i)
    const siteMapSection = screen.getByText(/sitemap/i)
    const title = screen.getByText(siteConfig.title)

    expect(socialMediaSection).toBeVisible()
    expect(siteMapSection).toBeVisible()
    expect(title).toBeVisible()
  })
})
