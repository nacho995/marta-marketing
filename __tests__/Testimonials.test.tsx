import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

describe('Testimonials Component', () => {
  it('renders section title', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Lo Que Dicen/i)).toBeInTheDocument()
    expect(screen.getByText(/Otros Agentes/i)).toBeInTheDocument()
  })

  it('renders all testimonials', () => {
    render(<Testimonials />)
    
    expect(screen.getByText(/Carlos Martínez/i)).toBeInTheDocument()
    expect(screen.getByText(/Laura Sánchez/i)).toBeInTheDocument()
    expect(screen.getByText(/Javier Ruiz/i)).toBeInTheDocument()
  })

  it('displays testimonial locations', () => {
    render(<Testimonials />)
    
    expect(screen.getByText(/Madrid/i)).toBeInTheDocument()
    expect(screen.getByText(/Valencia/i)).toBeInTheDocument()
    expect(screen.getByText(/Sevilla/i)).toBeInTheDocument()
  })

  it('renders results statistics', () => {
    render(<Testimonials />)
    
    expect(screen.getByText(/\+150/i)).toBeInTheDocument()
    expect(screen.getByText(/Consultas Generadas/i)).toBeInTheDocument()
    expect(screen.getByText(/93%/i)).toBeInTheDocument()
    expect(screen.getByText(/Tasa de Satisfacción/i)).toBeInTheDocument()
  })

  it('displays star ratings for testimonials', () => {
    const { container } = render(<Testimonials />)
    
    // Each testimonial should have 5 stars
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThan(0)
  })
})

