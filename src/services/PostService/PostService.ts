import { allPosts } from 'contentlayer/generated'

import { formatDate, formatPosts, slugify } from '@/functions'

export const PostService = {
  getAll: () => {
    const formattedPosts = allPosts.map((post) => {
      return {
        slug: slugify(post.slug),
        body: post.body,
        readingTime: Math.ceil(post.readingTime.minutes),
        frontmatter: {
          title: post.title,
          description: post.description,
          date: formatDate(post.date),
          tags: post.tags,
          image: post.image,
        },
      }
    })

    return {
      posts: formattedPosts,
    }
  },

  getBySlug: (slug: string) => {
    const formattedPosts = formatPosts(allPosts)
    const post = formattedPosts.find((post) => post.slug === slug)

    return post
  },
}
