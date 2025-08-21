'use client'
import { useEffect } from 'react'

declare global {
  interface Window { instgrm?: any }
}

type Props = {
  posts: string[]
  showCaptions?: boolean
}

export default function InstagramEmbed({ posts, showCaptions = true }: Props){
  useEffect(() => {
    const existing = document.getElementById('ig-embed-sdk')
    if(!existing){
      const s = document.createElement('script')
      s.id = 'ig-embed-sdk'
      s.async = true
      s.src = 'https://www.instagram.com/embed.js'
      document.body.appendChild(s)
      s.onload = () => window.instgrm?.Embeds?.process()
    }else{
      window.instgrm?.Embeds?.process()
    }
  }, [posts])

  if(!posts?.length) return null

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((url, i) => (
        <blockquote
          key={i}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          // Captions: Instagram resmi dokümantasyonda mevcut bayrak
          {...(showCaptions ? { 'data-instgrm-captioned': '' } : {})}
          style={{
            background:'#fff',
            border:0,
            margin:0,
            padding:0,
            minWidth:'326px',
            width:'100%',
            maxWidth:'540px'
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">Instagram Post</a>
        </blockquote>
      ))}
    </div>
  )
}
