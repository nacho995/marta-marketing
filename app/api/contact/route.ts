import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido'),
  location: z.string().min(2, 'La localidad es obligatoria'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    // Parse del body
    const body = await request.json()

    // Validación de datos
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Datos inválidos',
          details: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Enviar email principal
    const result = await sendContactEmail(data)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Error al enviar el email. Por favor, inténtalo de nuevo o contacta directamente por WhatsApp.'
        },
        { status: 500 }
      )
    }

    // Enviar email de confirmación al cliente (no bloquear la respuesta)
    sendConfirmationEmail(data).catch(err => 
      console.error('Error enviando confirmación:', err)
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaré pronto!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API de contacto:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Error interno del servidor'
      },
      { status: 500 }
    )
  }
}

