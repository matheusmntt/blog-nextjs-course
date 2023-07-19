import { NavItem } from '@/types'

import { List, ListItem } from '@/components/List'

import * as S from './styles'

type SocialMediaProps = {
  items: NavItem[]
}

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <List className="flex-col">
      {items.map((item) => (
        <ListItem key={item.title}>
          <S.Link href={item.href}>
            {item?.icon}
            {item.title}
          </S.Link>
        </ListItem>
      ))}
    </List>
  )
}
