import Header from "@/components/Header"
import styles from "../../styles/blog.module.css"
import { createClient } from 'contentful'
import { useState } from 'react'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

function getYoutubeVideoId(url: string) {
  if (!url) return null;
  try {
    const urlObj = new URL(url.startsWith('www.') ? `https://${url}` : url);
    if (urlObj.hostname.includes('youtube.com')) {
      return urlObj.searchParams.get('v');
    } else if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.substring(1);
    }
  } catch (e) {
    return null;
  }
  return null;
}

export default async function BlogPosts() {
  const response = await client.getEntries({
    content_type: 'cuteThingsOnlineBlog',
    select: ['fields.title', 'fields.linkVideo', 'fields.tags']
  });

  const posts = response.items.map(item => ({
    title: item.fields.title,
    videoLink: item.fields.linkVideo,
    tags: item.fields.tags || [],
  }));

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.tagsFilter}>
          {/* We can implement tag filtering here later */}
        </div>
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.post}>
              <h2 className={styles.postTitleBlog}>{post.title}</h2>
              {post.videoLink && (
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="215"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(post.videoLink)}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className={styles.tags}>
                {post.tags.map((tag: string, tagIndex: number) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}