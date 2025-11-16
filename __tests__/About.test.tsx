import { render, screen } from '@testing-library/react'
import About from '@/components/About'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('About Component', () => {
  it('renders section title', () => {
    render(<About />)
    expect(screen.getByText(/Sé Exactamente Lo Que/i)).toBeInTheDocument()
    expect(screen.getByText(/Necesitas/i)).toBeInTheDocument()
  })

  it('renders Marta image', () => {
    render(<About />)
    
    const image = screen.getByAlt(/Marta López - Agente Inmobiliaria/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/marta.jpeg')
  })

  it('renders about text content', () => {
    render(<About />)
    
    expect(screen.getByText(/Soy agente inmobiliaria independiente/i)).toBeInTheDocument()
    expect(screen.getByText(/Facebook e Instagram son las plataformas más potentes/i)).toBeInTheDocument()
  })

  it('renders commitment section', () => {
    render(<About />)
    
    expect(screen.getByText(/Mi compromiso:/i)).toBeInTheDocument()
  })

  it('has CTA button', () => {
    render(<About />)
    
    const ctaButton = screen.getByText(/Hablemos de Tu Negocio/i)
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton.closest('a')).toHaveAttribute('href', '#contact')
  })
})

