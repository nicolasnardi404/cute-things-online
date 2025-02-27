"use client"

import Header from "@/components/Header"
import styles from "../../../styles/docs.module.css"

export default function VideoResources() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Video Resources</h1>
        
        <section className={styles.section}>
          <h2>Prompt Template</h2>
          <div className={styles.codeBlock}>
            <pre>
              {`1. Basics
Website Name: [Your Artistic Name or Brand]
Purpose: (e.g., Portfolio, Online Store, Blog)

2. Design Style
Theme: Playful, Interactive, Bold
Colors: Bright and contrasting (e.g., Neon pink, electric blue, black)
Fonts: Mix of bold display fonts and clean sans-serif
Mood: Fun, energetic, and memorable

3. Pages
Homepage:
- Hero section with bold text and interactive elements
- Quick links to portfolio, about, and contact

About:
- Fun, personal introduction with animations
- Timeline or story of your artistic journey

Portfolio:
- Grid or masonry layout with hover effects
- Categories or filters for different types of work

Contact:
- Playful contact form with animated inputs
- Social media links with custom icons

4. Extras
- Animations: Micro-interactions, hover effects
- Dark Mode: Optional toggle
- Sound Effects: Subtle sounds (optional)
- Custom Cursor: Unique cursor design

5. Technology
- Framework: Next.js
- Languages: React, JavaScript
- Styling: Tailwind CSS or CSS-in-JS
- Animations: Framer Motion or GSAP
- Hosting: Vercel`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Git Commands Guide</h2>
          <div className={styles.gitGuide}>
            <h3>Basic Git Workflow</h3>
            <ul>
              <li>
                <code>git status</code>: Shows which files have been changed
              </li>
              <li>
                <code>git add [filename]</code>: Stages specific file changes
                <br />
                <code>git add .</code>: Stages all changes
              </li>
              <li>
                <code>git commit -m "message"</code>: Saves staged changes with a description
              </li>
              <li>
                <code>git push</code>: Uploads committed changes to GitHub
              </li>
            </ul>

            <h3>Example Workflow</h3>
            <pre>
              {`# Check what files changed
$ git status

# Stage changes
$ git add components/Header.tsx

# Commit changes with message
$ git commit -m "Update header navigation"

# Push to GitHub
$ git push`}
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Helpful Shortcuts</h2>
          <div className={styles.shortcuts}>
            <ul>
              <li>
                <code>Ctrl + S</code> (Windows) or <code>⌘ + S</code> (Mac): Save current file
              </li>
              <li>
                <strong>Important:</strong> Always save your files before using Git commands! 
                Git will only track saved changes.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
} 