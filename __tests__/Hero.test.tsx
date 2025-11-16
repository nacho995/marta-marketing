import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders main headline correctly', () => {
    render(<Hero />)
    expect(screen.getByText(/Más Consultas/i)).toBeInTheDocument()
    expect(screen.getByText(/Más Clientes/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Quiero Más Consultas/i)).toBeInTheDocument()
    expect(screen.getByText(/Ver Cómo Funciona/i)).toBeInTheDocument()
  })

  it('renders trust indicators', () => {
    render(<Hero />)
    expect(screen.getByText(/100%/i)).toBeInTheDocument()
    expect(screen.getByText(/Enfocado en Inmobiliario/i)).toBeInTheDocument()
    expect(screen.getByText(/Formación Necesaria/i)).toBeInTheDocument()
  })

  it('scrolls to contact section when CTA button is clicked', () => {
    const mockScrollIntoView = jest.fn()
    HTMLElement.prototype.scrollIntoView = mockScrollIntoView

    render(<Hero />)
    const ctaButton = screen.getByText(/Quiero Más Consultas/i)
    fireEvent.click(ctaButton)

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('displays Marta López name', () => {
    render(<Hero />)
    expect(screen.getByText(/Marta López/i)).toBeInTheDocument()
  })
})

