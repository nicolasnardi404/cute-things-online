import Header from "@/components/Header"
import styles from "../../../styles/blog.module.css"
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { notFound } from 'next/navigation'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

function formatUrl(url: string) {
  if (url.startsWith('www.')) {
    return `https://${url}`
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`
  }
  return url
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const response = await client.getEntry(params.slug)
    .catch(() => null);

  if (!response) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <article className={styles.fullPost}>
          <div className={styles.postHeader}>
            <h1 className={styles.postTitle}>{response.fields.title}</h1>
          </div>
          <div className={styles.postContent}>
            {documentToReactComponents(response.fields.content)}
          </div>
          {response.fields.linkVideo && (
            <div className={styles.videoLinkContainer}>
              <a 
                href={formatUrl(response.fields.linkVideo)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoLink}
              >
                Watch Video ✨
              </a>
            </div>
          )}
        </article>
      </main>
    </div>
  )
} 