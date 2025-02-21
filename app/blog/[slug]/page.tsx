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

function getYoutubeVideoId(url: string) {
  const formattedUrl = formatUrl(url);
  const urlObj = new URL(formattedUrl);
  
  if (urlObj.hostname.includes('youtube.com')) {
    return urlObj.searchParams.get('v');
  } else if (urlObj.hostname.includes('youtu.be')) {
    return urlObj.pathname.substring(1);
  }
  return null;
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
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/${getYoutubeVideoId(response.fields.linkVideo)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </article>
      </main>
    </div>
  )
} 