'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PullQuoteSection() {
  useScrollReveal()

  return (
    <div
      style={{
        background: '#1a1208',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <blockquote
        className="reveal"
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(21px, 3.8vw, 34px)',
          color: '#f5efe0',
          maxWidth: '720px',
          margin: '0 auto 24px',
          lineHeight: 1.4,
        }}
      >
        &ldquo;Cada calle tiene una historia que contar &mdash; y no todas tienen un final feliz.&rdquo;
      </blockquote>
      <cite
        className="reveal"
        style={{
          fontSize: '13px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8922a',
          fontStyle: 'normal',
        }}
      >
        Auld Stirling Punishments
      </cite>
    </div>
  )
}
