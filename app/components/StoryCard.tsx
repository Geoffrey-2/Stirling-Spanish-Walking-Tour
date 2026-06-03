'use client'

import { useState } from 'react'

interface StoryCardProps {
  icon: string
  title: string
  body: string
}

export default function StoryCard({ icon, title, body }: StoryCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="story-card reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(200,146,42,.07)' : 'rgba(255,255,255,.03)',
        border: `1px solid ${hovered ? 'rgba(200,146,42,.35)' : 'rgba(200,146,42,.15)'}`,
        padding: '38px 34px',
        transition: 'background .25s, border-color .25s',
      }}
    >
      <span style={{ fontSize: '26px', marginBottom: '18px', display: 'block' }}>
        {icon}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: '21px',
          color: '#f5efe0',
          marginBottom: '12px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '15px', color: '#9a8e7e', lineHeight: 1.65 }}>
        {body}
      </p>
    </div>
  )
}
