import Header from "@/components/Header"
import styles from "../../styles/blog.module.css"
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

// Move the client creation to a separate utility file
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Using the same colors as projects page
const bgColors = [
  'var(--color-pink)',
  'var(--color-baby-blue)',
  'var(--color-lavender)',
]

// Update interface to match actual fields
interface BlogPost {
  id: string
  title: string
  content: any  // Rich text content from Contentful
  videoLink?: string // Optional since some posts might not have videos
  bgColor: string
  slug: string  // Add slug for URL routing
}

// Helper function to ensure URL has proper format
const formatUrl = (url: string) => {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return `https://${url}`
}

// Make the component async to fetch data server-side
export default async function BlogPage() {
  // Fetch posts server-side
  const response = await client.getEntries({
    content_type: 'cuteThingsOnlineBlog',
  })


  const blogPosts = response.items.map((item: any, index: number) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      content: item.fields.content,
      videoLink: formatUrl(item.fields.linkVideo),
      bgColor: bgColors[index % bgColors.length],
    }
  })

  // Log the processed posts
  console.log('Processed Blog Posts:', blogPosts)

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cute Blog</h1>
          <p className={styles.subtitle}>Exploring the intersection of cuteness and technology ✨</p>
        </div>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className={styles.post}
              style={{ backgroundColor: post.bgColor }}
            >
              <Link href={`/blog/${post.id}`} className={styles.postLink}>
                <h2 className={styles.postTitleBlog}>{post.title}</h2>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
} 