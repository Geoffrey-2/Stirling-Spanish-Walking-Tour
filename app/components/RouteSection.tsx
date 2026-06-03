'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

const stops = [
  {
    name: 'Gatehouse — Old Town Jail, St John Street',
    desc: 'Punto de encuentro y partida',
  },
  {
    name: 'Mercat Cross, Broad Street',
    desc: 'Castigos públicos en la plaza del mercado',
  },
  {
    name: "Hangman's Close — El Callejón del Verdugo",
    desc: 'Hogar del último ejecutor de Stirling',
  },
  {
    name: 'El Tolbooth, Jail Wynd',
    desc: 'La peor cárcel de Escocia y su Celda de los Condenados',
  },
  {
    name: "Mar's Wark, Castle Wynd",
    desc: 'El palacio maldito convertido en casa de trabajo',
  },
  {
    name: "John Cowane's Hospital",
    desc: 'El mercader más célebre y más escandaloso de Stirling',
  },
  {
    name: 'Cementerio Antiguo y Valle',
    desc: 'Quemas de brujas, mártires radicales y Robert Burns',
  },
  {
    name: 'Old Town Jail, St John Street',
    desc: 'Reforma, silencio y el último ahorcamiento público',
  },
]

export default function RouteSection() {
  useScrollReveal()

  return (
    <section
      style={{
        padding: '96px 24px',
        background: '#e8dcc4',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }}
        className="route-inner"
      >
        <div>
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
            El recorrido
          </span>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            Ocho paradas a través de<br />
            cinco siglos de historia
          </h2>
          <p
            className="reveal"
            style={{ color: '#6b5f4e', marginBottom: '16px', fontSize: '17px' }}
          >
            El tour recorre el Casco Antiguo medieval de Stirling, desde Broad Street
            hasta el Cementerio del Valle, regresando a St John Street. Se recomienda
            calzado cómodo.
          </p>
          <p
            className="reveal"
            style={{ color: '#6b5f4e', marginBottom: '16px', fontSize: '17px' }}
          >
            Duración aproximada de 90 minutos. Impartido íntegramente en español.
          </p>
        </div>

        <div>
          <ol className="stops-list reveal">
            {stops.map((stop) => (
              <li key={stop.name}>
                <div>
                  <strong
                    style={{
                      color: '#1a1208',
                      fontWeight: 500,
                      display: 'block',
                      fontSize: '14.5px',
                    }}
                  >
                    {stop.name}
                  </strong>
                  <span style={{ fontStyle: 'italic', fontSize: '13.5px' }}>
                    {stop.desc}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .route-inner {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
