import { Tag } from '@/components/Tag'

import { BlogPost } from '@/models'

import * as S from './styles'

export type PostCardProps = {
  post: BlogPost
  isMain?: boolean
}

export const PostCard = ({ post, isMain = false }: PostCardProps) => {
  const { frontmatter, readingTime, slug } = post
  const { title, description, date, image, tags } = frontmatter

  return (
    <>
      <S.LinkContainer href={slug} $isMain={isMain}>
        <S.ImageContainer className={`${isMain && 'lg:mr-3'}`}>
          <S.Image src={image} alt="title" priority fill></S.Image>
        </S.ImageContainer>

        <S.Content className={`${isMain && 'lg:pt-0'}`}>
          <S.TagsContainer>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.TagsContainer>

          <S.Time>
            {date} • {readingTime} minutos de leitura
          </S.Time>

          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </S.Content>
      </S.LinkContainer>
    </>
  )
}
