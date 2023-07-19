import tw from 'tailwind-styled-components'

import * as ListItemContainer from '@/components/List/components/ListItem/styles'

export const Nav = tw.nav`
  hidden
  items-center
  justify-between
  lg:flex 
`

export const List = tw.ul`
  flex
  gap-4
`

export const ListItem = tw.li`
  text-base
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`

export const Content = tw.div`
  z-50
  flex
  transition-colors
  duration-300
  hover:text-link
  lg:hidden
`
export const ContainerMobile = tw.div`
  fixed
  left-0
  top-0
  z-30
  min-h-screen
  w-full
  overflow-hidden
  bg-primary/80
  pt-[4rem]
  backdrop-blur-lg
  lg:hidden
`

export const NavMobile = tw.nav`
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-50
  bg-secondary
  py-3
  shadow-2xl
`

export const ListMobile = tw.ul`
  w-full
  flex-col
  items-center
  justify-center
  px-4
`

export const ListItemMobile = tw(ListItemContainer.Container)`
  border-b
  border-gray-600
  py-3
`
