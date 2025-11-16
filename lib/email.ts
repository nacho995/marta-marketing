import nodemailer from 'nodemailer'

export interface EmailData {
  name: string
  email: string
  phone: string
  location: string
  message: string
}

// Configuración del transporter de nodemailer
const createTransporter = () => {
  // Si no hay configuración SMTP, usar servicio de prueba ethereal
  if (!process.env.SMTP_HOST) {
    console.warn('⚠️  SMTP no configurado. Los emails se simularán en desarrollo.')
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

// Plantilla HTML para el email
const getEmailTemplate = (data: EmailData): string => {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Consulta - Marta Marketing</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                Nueva Consulta de Cliente
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.5;">
                Has recibido una nueva consulta a través del formulario de contacto:
              </p>
              
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-left: 4px solid #0ea5e9;">
                    <strong style="color: #0ea5e9;">Nombre:</strong><br>
                    <span style="color: #374151;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #ffffff;">
                    <strong style="color: #0ea5e9;">Email:</strong><br>
                    <a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb;">
                    <strong style="color: #0ea5e9;">Teléfono:</strong><br>
                    <a href="tel:${data.phone}" style="color: #0284c7; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #ffffff;">
                    <strong style="color: #0ea5e9;">Localidad:</strong><br>
                    <span style="color: #374151;">${data.location}</span>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #fbbf24;">
                <strong style="color: #0ea5e9; display: block; margin-bottom: 10px;">Mensaje:</strong>
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <!-- CTA -->
              <table role="presentation" style="width: 100%; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 32px; background-color: #0ea5e9; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                      Responder por Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; text-align: center;">
                Este email fue enviado desde el formulario de contacto de Marta Marketing
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Función para enviar el email
export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const transporter = createTransporter()

    // Si no hay transporter configurado, simular envío en desarrollo
    if (!transporter) {
      console.log('📧 Email simulado:', data)
      return { success: true }
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: data.email,
      subject: `Nueva Consulta de ${data.name} - ${data.location}`,
      html: getEmailTemplate(data),
      text: `
Nueva Consulta de Cliente

Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Localidad: ${data.location}

Mensaje:
${data.message}
      `,
    }

    await transporter.sendMail(mailOptions)
    
    console.log('✅ Email enviado exitosamente a:', mailOptions.to)
    return { success: true }
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido al enviar el email'
    }
  }
}

// Función para enviar email de confirmación al cliente
export async function sendConfirmationEmail(data: EmailData): Promise<void> {
  try {
    const transporter = createTransporter()
    
    if (!transporter) {
      console.log('📧 Email de confirmación simulado para:', data.email)
      return
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: data.email,
      subject: 'Hemos recibido tu consulta - Marta López',
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px;">
          <tr>
            <td style="padding: 40px; text-align: center; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">¡Gracias por contactarme!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                Hola <strong>${data.name}</strong>,
              </p>
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                He recibido tu consulta y me pondré en contacto contigo lo antes posible, normalmente en menos de 24 horas.
              </p>
              <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                Mientras tanto, si tienes alguna pregunta urgente, no dudes en contactarme directamente por WhatsApp.
              </p>
              <table role="presentation" style="width: 100%; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/34608136529" style="display: inline-block; padding: 14px 32px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                      Contactar por WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Un saludo,<br>
                <strong>Marta López</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Gestión de Campañas Meta para Agentes Inmobiliarios
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Email de confirmación enviado a:', data.email)
  } catch (error) {
    console.error('❌ Error al enviar email de confirmación:', error)
  }
}

