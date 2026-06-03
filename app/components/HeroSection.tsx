'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <header
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 60px',
        overflow: 'hidden',
      }}
    >
      {/* Hero background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          filter: 'brightness(0.86) saturate(0.7)',
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="St John Street, Stirling Old Town"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority={true}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg,rgba(26,18,8,.55) 0%,rgba(26,18,8,.75) 60%,rgba(26,18,8,.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <p
        className="hero-eyebrow"
        style={{
          fontFamily: 'var(--font-garamond), Georgia, serif',
          fontSize: '13px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#c8922a',
          marginBottom: '28px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Old Town Jail, Stirling &middot; Recorrido guiado en español
      </p>

      <h1
        className="hero-h1"
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: 'clamp(38px, 7.5vw, 84px)',
          color: '#f5efe0',
          lineHeight: 1.05,
          maxWidth: '900px',
          marginBottom: '8px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Adéntrate en las{' '}
        <em style={{ fontStyle: 'italic', color: '#e8b84a' }}>Sombras</em>{' '}
        de Stirling
      </h1>

      <p
        className="hero-subtitle"
        style={{
          fontSize: 'clamp(16px, 2.2vw, 21px)',
          color: '#9a8e7e',
          fontStyle: 'italic',
          marginTop: '16px',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Auld Stirling Punishments &mdash; Un tour a pie por el Casco Antiguo en español
      </p>

      <p
        className="hero-desc"
        style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          color: 'rgba(245,239,224,.85)',
          maxWidth: '640px',
          marginBottom: '56px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Explora el lado más oscuro y turbulento de una de las ciudades más históricas
        de Escocia en este exclusivo tour guiado en español. Cada calle tiene una
        historia que contar &mdash; y no todas tienen un final feliz.
      </p>

      <a
        href="https://oldtownjail.resova.co.uk/items/view/21"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-cta"
        style={{
          display: 'inline-block',
          background: '#c84b1f',
          color: '#ffffff',
          fontFamily: 'var(--font-garamond), Georgia, serif',
          fontSize: '16px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '18px 44px',
          border: '1px solid #d9612f',
          transition: 'background .2s, transform .2s',
          position: 'relative',
          zIndex: 2,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.background = '#d9612f'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.background = '#c84b1f'
          el.style.transform = 'translateY(0)'
        }}
      >
        Reserva tu plaza
      </a>

      <span
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#9a8e7e',
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          zIndex: 2,
        }}
      >
        ↓ &nbsp; Descubre el tour
      </span>
    </header>
  )
}
