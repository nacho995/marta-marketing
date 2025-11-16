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

    // Enviar email a Marta
    console.log('📧 Enviando email a Marta...')
    const resultToMarta = await sendContactEmail(data)

    if (!resultToMarta.success) {
      console.error('❌ Error al enviar email a Marta:', resultToMarta.error)
      return NextResponse.json(
        {
          success: false,
          error: 'Error al enviar el email. Por favor, inténtalo de nuevo o contacta directamente por WhatsApp.'
        },
        { status: 500 }
      )
    }
    console.log('✅ Email a Marta enviado correctamente')

    // Enviar email de confirmación al cliente
    console.log('📧 Enviando email de confirmación al cliente:', data.email)
    try {
      await sendConfirmationEmail(data)
      console.log('✅ Email de confirmación enviado correctamente')
    } catch (err) {
      console.error('❌ Error enviando confirmación al cliente:', err)
      // No fallar la petición si falla el email de confirmación
    }

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

