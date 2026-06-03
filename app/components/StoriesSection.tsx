'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import StoryCard from './StoryCard'

const stories = [
  {
    icon: '⚖',
    title: 'Justicia en el Mercat Cross',
    body: 'Presencia los castigos públicos en la plaza del mercado de Broad Street: los grilletes, el freno de la regañona y la rara exhibición del patíbulo. Donde las balanzas de la justicia se equilibraban ante todos.',
  },
  {
    icon: '🔑',
    title: 'El Último Verdugo de Stirling',
    body: 'Conoce a Jock Rankine, el verdugo más despreciado de la ciudad, y a su notable esposa Tibbie Cawker. ¿Y quién ahorcó realmente a Sarah Cameron en 1784?',
  },
  {
    icon: '🏛',
    title: 'Corrupción en el Ayuntamiento',
    body: 'Descubre el infame Pacto Negro, el robo de cadáveres en el cementerio de Holy Rude, y el mercader que empleó piratas para financiar sus inversiones.',
  },
  {
    icon: '🔥',
    title: 'Juicios de Brujas en el Valle',
    body: 'Stirling quemó a sus brujas a una distancia segura de los tejados de paja del Casco Antiguo. Descubre los escalofriantes métodos de los Pinchadores Comunes.',
  },
  {
    icon: '✊',
    title: 'Radicales y Mártires',
    body: 'Los tejedores Baird y Hardie fueron ahorcados frente al Tolbooth en 1820 por atreverse a imaginar una Escocia más justa. Su muerte digna inspiró un movimiento.',
  },
  {
    icon: '⛓',
    title: 'La Nueva Cárcel del Condado',
    body: 'Los carceleros patrullaban en zapatillas de lana para espiar a los presos en silencio. Conoce al Jefe Carcelero Hislop y descubre lo que la reforma significaba en 1847.',
  },
]

export default function StoriesSection() {
  useScrollReveal()

  return (
    <section
      style={{
        background: '#1a1208',
        padding: '96px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="reveal"
        style={{
          textAlign: 'center',
          marginBottom: '72px',
          maxWidth: '780px',
          margin: '0 auto 72px',
          padding: '0 24px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-garamond), Georgia, serif',
            fontSize: '12px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#c8922a',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          Lo que descubrirás
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(24px, 3.8vw, 38px)',
            color: '#f5efe0',
            lineHeight: 1.2,
          }}
        >
          Historia raramente contada.<br />
          Nunca del todo olvidada.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2px',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {stories.map((s) => (
          <StoryCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
        ))}
      </div>
    </section>
  )
}
