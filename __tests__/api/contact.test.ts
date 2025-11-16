import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

// Mock de nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' }),
  })),
}))

describe('Contact API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should successfully send contact form data', async () => {
    const mockData = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '600123456',
      location: 'Madrid',
      message: 'Estoy interesado en sus servicios de gestión de campañas.',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBeDefined()
  })

  it('should reject invalid email', async () => {
    const mockData = {
      name: 'Juan Pérez',
      email: 'invalid-email',
      phone: '600123456',
      location: 'Madrid',
      message: 'Estoy interesado en sus servicios.',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Datos inválidos')
  })

  it('should reject short name', async () => {
    const mockData = {
      name: 'J',
      email: 'juan@example.com',
      phone: '600123456',
      location: 'Madrid',
      message: 'Estoy interesado en sus servicios.',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
  })

  it('should reject short message', async () => {
    const mockData = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '600123456',
      location: 'Madrid',
      message: 'Hola',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
  })

  it('should reject invalid phone', async () => {
    const mockData = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '123',
      location: 'Madrid',
      message: 'Estoy interesado en sus servicios.',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
  })

  it('should reject missing fields', async () => {
    const mockData = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      // Missing phone, location, message
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(mockData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
  })

  it('should handle malformed JSON', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: 'invalid json',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.success).toBe(false)
  })
})

