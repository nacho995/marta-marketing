import { render, screen, fireEvent } from '@testing-library/react'
import FloatingContact from '@/components/FloatingContact'

describe('FloatingContact Component', () => {
  it('renders floating contact button', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    expect(button).toBeInTheDocument()
  })

  it('shows contact options when clicked', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    
    fireEvent.click(button)

    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument()
    expect(screen.getByText(/Llamar/i)).toBeInTheDocument()
    expect(screen.getByText(/Email/i)).toBeInTheDocument()
  })

  it('hides contact options when clicked again', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    
    fireEvent.click(button)
    expect(screen.getByText(/WhatsApp/i)).toBeVisible()
    
    fireEvent.click(button)
    // Los botones siguen en el DOM pero con opacity-0
    const whatsappButton = screen.getByText(/WhatsApp/i)
    expect(whatsappButton.parentElement?.parentElement).toHaveClass('opacity-0')
  })

  it('has correct WhatsApp link', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    fireEvent.click(button)

    const whatsappLink = screen.getByText(/WhatsApp/i).closest('a')
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
    expect(whatsappLink).toHaveAttribute('target', '_blank')
  })

  it('has correct phone link', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    fireEvent.click(button)

    const phoneLink = screen.getByText(/Llamar/i).closest('a')
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'))
  })

  it('has correct email link', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    fireEvent.click(button)

    const emailLink = screen.getByText(/Email/i).closest('a')
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })

  it('closes menu when a contact option is clicked', () => {
    render(<FloatingContact />)
    const button = screen.getByRole('button', { name: /contactar/i })
    
    fireEvent.click(button)
    const whatsappButton = screen.getByText(/WhatsApp/i).closest('a')
    
    if (whatsappButton) {
      fireEvent.click(whatsappButton)
      // El menú debería cerrarse
      expect(whatsappButton.parentElement?.parentElement).toHaveClass('opacity-0')
    }
  })
})

