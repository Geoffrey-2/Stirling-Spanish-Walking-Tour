'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function IntroSection() {
  useScrollReveal()

  return (
    <section
      style={{
        padding: '96px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <span
          className="reveal"
          style={{
            fontFamily: 'var(--font-garamond), Georgia, serif',
            fontSize: '12px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#8b2c1a',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          Sobre el tour
        </span>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(27px, 4.5vw, 44px)',
            lineHeight: 1.15,
            marginBottom: '32px',
          }}
        >
          Crimen, castigo y escándalo<br />
          en el corazón del Casco Antiguo
        </h2>

        <div className="ornamental-rule reveal">
          <span style={{ color: '#c8922a', fontSize: '20px' }}>✦</span>
        </div>

        <p
          className="reveal"
          style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: '#6b5f4e',
            maxWidth: '660px',
            margin: '0 auto 20px',
          }}
        >
          El tour comienza en el <em>Gatehouse</em> &mdash; Centro de Información al
          Visitante de la Old Town Jail &mdash; en St John Street. Desde allí, tu guía
          te conducirá por las sinuosas calles del Casco Antiguo de Stirling, desvelando
          historias de crimen, castigo, corrupción y justicia a lo largo de cinco siglos.
        </p>

        <p
          className="reveal"
          style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: '#6b5f4e',
            maxWidth: '660px',
            margin: '0 auto 20px',
          }}
        >
          Descubre las historias de criminales notorios, temidas figuras de autoridad,
          magistrados corruptos y ciudadanos ordinarios atrapados en la maquinaria de la
          ley. Perfecto para visitantes hispanohablantes que quieran descubrir Stirling
          más allá de las murallas del castillo.
        </p>
      </div>
    </section>
  )
}
