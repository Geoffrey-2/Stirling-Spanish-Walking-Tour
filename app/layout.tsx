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
  title: 'Tour a Pie en Español — Auld Stirling Punishments | Old Town Jail',
  description:
    'Explora el lado más oscuro de Stirling en este exclusivo tour guiado en español. Crimen, castigo y escándalo en el Casco Antiguo. Viernes a lunes, 13:45.',
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
