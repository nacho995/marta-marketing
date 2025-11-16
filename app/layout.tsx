import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marta López - Gestión de Campañas Meta para Agentes Inmobiliarios',
  description: 'Servicio especializado de gestión de campañas publicitarias en Facebook e Instagram para agentes inmobiliarios independientes. Más consultas, más clientes, sin complicaciones.',
  keywords: 'publicidad inmobiliaria, facebook ads, instagram ads, agentes inmobiliarios, captación inmuebles, marketing inmobiliario',
  openGraph: {
    title: 'Marta López - Gestión de Campañas Meta',
    description: 'Gestión profesional de publicidad en Facebook e Instagram para agentes inmobiliarios',
    type: 'website',
    images: [
      {
        url: '/marta.jpeg',
        width: 1200,
        height: 630,
        alt: 'Marta López - Agente Inmobiliaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marta López - Gestión de Campañas Meta',
    description: 'Gestión profesional de publicidad en Facebook e Instagram para agentes inmobiliarios',
    images: ['/marta.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

