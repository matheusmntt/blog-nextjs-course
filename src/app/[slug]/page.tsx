import { PostService } from '@/services'

import { Post } from '@/components/Post/Post'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = PostService.getBySlug(params.slug)

  if (!post) {
    return null
  }

  return (
    <div>
      <h1>
        <Post post={post} />
      </h1>
    </div>
  )
}
