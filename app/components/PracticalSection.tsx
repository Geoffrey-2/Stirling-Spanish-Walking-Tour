'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const days = ['Viernes', 'Sábado', 'Domingo', 'Lunes']

const infoItems = [
  {
    label: 'Punto de encuentro',
    value: (
      <>
        Gatehouse — Old Town Jail<br />
        St John Street<br />
        Stirling, FK8 1EA
      </>
    ),
  },
  {
    label: 'Hora de salida',
    value: (
      <>
        13:45<br />
        <em>Llega 10 minutos antes</em>
      </>
    ),
  },
  { label: 'Duración', value: 'Aproximadamente 90 minutos' },
  { label: 'Idioma', value: 'Íntegramente en español' },
  {
    label: 'Temporada',
    value: (
      <>
        Programa de verano<br />
        Consulta la web para fechas
      </>
    ),
  },
  {
    label: 'Qué llevar',
    value: (
      <>
        Calzado cómodo<br />
        Chubasquero<br />
        Sentido del humor negro
      </>
    ),
  },
]

function BookingButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="https://oldtownjail.resova.co.uk/items/view/21"
      target="_blank"
      rel="noopener noreferrer"
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        background: hovered ? '#d9612f' : '#c84b1f',
        color: '#ffffff',
        fontFamily: 'var(--font-garamond), Georgia, serif',
        fontSize: '17px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '18px 52px',
        border: '1px solid #d9612f',
        transition: 'background .2s, transform .2s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      Reserva ahora
    </a>
  )
}

export default function PracticalSection() {
  useScrollReveal()

  return (
    <section
      id="reservar"
      style={{
        padding: '96px 24px',
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
          Planifica tu visita
        </span>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(25px, 3.8vw, 38px)',
            marginBottom: '56px',
          }}
        >
          Fechas y reservas
        </h2>

        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {days.map((day) => (
            <span
              key={day}
              style={{
                background: '#1a1208',
                color: '#f5efe0',
                fontFamily: 'var(--font-garamond), Georgia, serif',
                fontSize: '14px',
                letterSpacing: '0.08em',
                padding: '10px 22px',
              }}
            >
              {day}
            </span>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '40px',
            maxWidth: '860px',
            margin: '0 auto 64px',
            textAlign: 'left',
          }}
        >
          {infoItems.map((item) => (
            <div key={item.label}>
              <h4
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8b2c1a',
                  marginBottom: '10px',
                }}
              >
                {item.label}
              </h4>
              <p style={{ fontSize: '17px', color: '#6b5f4e' }}>{item.value}</p>
            </div>
          ))}
        </div>

        <BookingButton />
      </div>
    </section>
  )
}
