import { notFound } from 'next/navigation'

import { paginationPages } from '@/functions'
import { PostService } from '@/services'

import { Pagination } from '@/components/Pagination'
import { PostsList } from '@/components/PostsLists'

export default function Page({ params }: { params: { page: string } }) {
  const currentPage = +params.page

  const { posts, numbPages } = PostService.getAll({ currentPage })
  const { prevPage, nextPage } = paginationPages(currentPage)

  if (!posts.length) {
    notFound()
  }

  return (
    <>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}
