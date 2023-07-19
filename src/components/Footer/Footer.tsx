import Link from 'next/link'

import { siteConfig } from '@/config'
import { socialLinksConfig } from '@/config/socialLinks'

import { List, ListItem } from '@/components/List'
import { Logo } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'

import { NavItem } from '@/models'

import * as S from './styles'

type FooterProps = {
  items: NavItem[]
}

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear()
  return (
    <S.Container>
      <S.Content>
        <S.Section role="contentinfo">
          <Logo />
          <S.Title>{siteConfig.title}</S.Title>
        </S.Section>

        <S.Section role="contentinfo">
          <S.Title>Redes</S.Title>

          <SocialMedia items={socialLinksConfig.mainNav} />
        </S.Section>

        <S.Section role="contentinfo">
          <S.Title>Sitemap</S.Title>

          <List className="flex-col">
            {items.map((item) => (
              <ListItem key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </ListItem>
            ))}
          </List>
        </S.Section>
      </S.Content>

      <S.CopyrightContainer>
        <S.Copyright>
          Todos os direito reservados © Matheus Monteiro {fullYear}
        </S.Copyright>
      </S.CopyrightContainer>
    </S.Container>
  )
}
