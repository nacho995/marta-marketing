import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(<Contact />)
    
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Localidad/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Cuéntame sobre tu negocio/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /Solicitar Información/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/El nombre debe tener al menos 2 caracteres/i)).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid email', async () => {
    render(<Contact />)
    
    const emailInput = screen.getByLabelText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
    const submitButton = screen.getByRole('button', { name: /Solicitar Información/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Email inválido/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    render(<Contact />)
    
    fireEvent.change(screen.getByLabelText(/Nombre completo/i), {
      target: { value: 'Juan Pérez' }
    })
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'juan@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/Teléfono/i), {
      target: { value: '600123456' }
    })
    fireEvent.change(screen.getByLabelText(/Localidad/i), {
      target: { value: 'Madrid' }
    })
    fireEvent.change(screen.getByLabelText(/Cuéntame sobre tu negocio/i), {
      target: { value: 'Soy agente inmobiliario y quiero más clientes' }
    })

    const submitButton = screen.getByRole('button', { name: /Solicitar Información/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Gracias! He recibido tu mensaje/i)).toBeInTheDocument()
    })
  })

  it('disables submit button while submitting', async () => {
    render(<Contact />)
    
    fireEvent.change(screen.getByLabelText(/Nombre completo/i), {
      target: { value: 'Juan Pérez' }
    })
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'juan@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/Teléfono/i), {
      target: { value: '600123456' }
    })
    fireEvent.change(screen.getByLabelText(/Localidad/i), {
      target: { value: 'Madrid' }
    })
    fireEvent.change(screen.getByLabelText(/Cuéntame sobre tu negocio/i), {
      target: { value: 'Mensaje de prueba' }
    })

    const submitButton = screen.getByRole('button', { name: /Solicitar Información/i })
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
  })
})

