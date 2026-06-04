import type { Metadata } from 'next'
import { Playfair_Display, EB_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tour a Pie en Español por el Casco Antiguo de Stirling | Auld Stirling Punishments',
  description:
    'Tour a pie guiado en español por el Casco Antiguo de Stirling. Descubre cinco siglos de crimen, castigo y escándalo en sus calles medievales. Viernes a lunes, 13:45.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${ebGaramond.variable}`}>
      <body style={{ fontFamily: 'var(--font-garamond), Georgia, serif' }}>
        {children}
      </body>
    </html>
  )
}
