import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services Component', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText(/Lo Hago Todo/i)).toBeInTheDocument()
    expect(screen.getByText(/Por Ti/i)).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Services />)
    
    expect(screen.getByText(/Diseño de Anuncios/i)).toBeInTheDocument()
    expect(screen.getByText(/Segmentación Precisa/i)).toBeInTheDocument()
    expect(screen.getByText(/Gestión Completa/i)).toBeInTheDocument()
    expect(screen.getByText(/Presupuesto Adaptado/i)).toBeInTheDocument()
    expect(screen.getByText(/Informes Claros/i)).toBeInTheDocument()
    expect(screen.getByText(/Soporte Personalizado/i)).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    
    expect(screen.getByText(/Creo anuncios profesionales/i)).toBeInTheDocument()
    expect(screen.getByText(/Dirijo tus anuncios exactamente/i)).toBeInTheDocument()
  })

  it('renders value proposition section', () => {
    render(<Services />)
    
    expect(screen.getByText(/Sin Estrés. Sin Formación. Sin Perder Tiempo./i)).toBeInTheDocument()
  })

  it('has CTA button in value proposition', () => {
    render(<Services />)
    
    const ctaButton = screen.getByText(/Empezar Ahora/i)
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton.closest('a')).toHaveAttribute('href', '#contact')
  })
})

