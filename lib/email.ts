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

// Plantilla HTML profesional para el email a Marta
const getEmailToMartaTemplate = (data: EmailData): string => {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Consulta - Marta Marketing</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);">
  <table role="presentation" style="width: 100%; border-collapse: collapse; min-height: 100vh; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table role="presentation" style="width: 100%; max-width: 650px; border-collapse: collapse; background-color: #ffffff; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;">
          
          <!-- Header con gradiente espectacular -->
          <tr>
            <td style="padding: 0; position: relative; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%); height: 200px;">
              <table role="presentation" style="width: 100%; height: 100%;">
                <tr>
                  <td align="center" valign="middle" style="padding: 40px;">
                    <!-- Icono de notificación -->
                    <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 20px; border: 3px solid rgba(255,255,255,0.3); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 48px;">🎉</span>
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; text-shadow: 0 2px 10px rgba(0,0,0,0.2); letter-spacing: -0.5px;">
                      ¡Nueva Consulta!
                    </h1>
                    <p style="margin: 10px 0 0; color: rgba(255,255,255,0.95); font-size: 16px; font-weight: 500;">
                      Un nuevo cliente potencial está interesado en tus servicios
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Badge urgencia -->
          <tr>
            <td style="padding: 0 40px; transform: translateY(-20px);">
              <table role="presentation" style="margin: 0 auto; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 50px; padding: 12px 24px; box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);">
                <tr>
                  <td align="center">
                    <span style="color: #ffffff; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                      ⚡ Responder Pronto
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 20px 40px 40px;">
              
              <!-- Información del cliente en cards modernas -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <!-- Nombre -->
                <tr>
                  <td style="padding: 0 0 16px 0;">
                    <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; padding: 20px; border-left: 5px solid #0ea5e9; box-shadow: 0 2px 8px rgba(14, 165, 233, 0.1);">
                      <tr>
                        <td>
                          <div style="display: flex; align-items: center;">
                            <span style="font-size: 24px; margin-right: 12px;">👤</span>
                            <div>
                              <p style="margin: 0; color: #0284c7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</p>
                              <p style="margin: 5px 0 0; color: #1e293b; font-size: 18px; font-weight: 700;">${data.name}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Email y Teléfono en dos columnas -->
                <tr>
                  <td style="padding: 0 0 16px 0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 48%; vertical-align: top; padding-right: 2%;">
                          <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 16px; padding: 20px; border-left: 5px solid #fbbf24; box-shadow: 0 2px 8px rgba(251, 191, 36, 0.1);">
                            <tr>
                              <td>
                                <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📧 Email</p>
                                <p style="margin: 8px 0 0; font-size: 14px;">
                                  <a href="mailto:${data.email}" style="color: #1e293b; font-weight: 700; text-decoration: none; word-break: break-all;">${data.email}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="width: 48%; vertical-align: top; padding-left: 2%;">
                          <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 16px; padding: 20px; border-left: 5px solid #10b981; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);">
                            <tr>
                              <td>
                                <p style="margin: 0; color: #059669; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📱 Teléfono</p>
                                <p style="margin: 8px 0 0;">
                                  <a href="tel:${data.phone}" style="color: #1e293b; font-size: 16px; font-weight: 700; text-decoration: none;">${data.phone}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Localidad -->
                <tr>
                  <td style="padding: 0 0 20px 0;">
                    <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); border-radius: 16px; padding: 20px; border-left: 5px solid #ec4899; box-shadow: 0 2px 8px rgba(236, 72, 153, 0.1);">
                      <tr>
                        <td>
                          <div style="display: flex; align-items: center;">
                            <span style="font-size: 24px; margin-right: 12px;">📍</span>
                            <div>
                              <p style="margin: 0; color: #db2777; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Localidad</p>
                              <p style="margin: 5px 0 0; color: #1e293b; font-size: 18px; font-weight: 700;">${data.location}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Mensaje destacado -->
              <div style="margin: 30px 0; padding: 30px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 20px; border: 2px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <span style="font-size: 28px; margin-right: 12px;">💬</span>
                  <h2 style="margin: 0; color: #0284c7; font-size: 20px; font-weight: 700;">Mensaje del Cliente</h2>
                </div>
                <div style="padding: 20px; background: #ffffff; border-radius: 12px; border-left: 4px solid #0ea5e9;">
                  <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- CTAs -->
              <table role="presentation" style="width: 100%; margin: 40px 0 20px;">
                <tr>
                  <td align="center" style="padding: 0 0 15px 0;">
                    <a href="mailto:${data.email}?subject=Re:%20Consulta%20sobre%20gestión%20de%20campañas%20Meta" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4); transition: all 0.3s;">
                      ✉️ Responder por Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://wa.me/${data.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(data.name)},%20he%20recibido%20tu%20consulta" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);">
                      💚 Contactar por WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer profesional -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 0 0 24px 24px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 15px; color: rgba(255,255,255,0.9); font-size: 16px; font-weight: 600;">
                      Marta López - Marketing Inmobiliario
                    </p>
                    <p style="margin: 0 0 20px; color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6;">
                      Gestión Profesional de Campañas en Meta<br>
                      Especializada en Agentes Inmobiliarios Independientes
                    </p>
                    <div style="margin: 20px 0;">
                      <a href="tel:+34608136529" style="color: #fbbf24; text-decoration: none; font-weight: 600; margin: 0 15px;">📞 +34 608 136 529</a>
                      <a href="mailto:mblp66@gmail.com" style="color: #fbbf24; text-decoration: none; font-weight: 600; margin: 0 15px;">📧 mblp66@gmail.com</a>
                    </div>
                    <p style="margin: 20px 0 0; color: rgba(255,255,255,0.5); font-size: 12px;">
                      Este email fue generado automáticamente desde el formulario de contacto
                    </p>
                  </td>
                </tr>
              </table>
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

// Función para enviar el email a Marta
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
      to: process.env.CONTACT_EMAIL || 'mblp66@gmail.com',
      replyTo: data.email,
      subject: `🎉 Nueva Consulta de ${data.name} - ${data.location}`,
      html: getEmailToMartaTemplate(data),
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

// Plantilla HTML profesional para el email de confirmación al cliente
const getConfirmationEmailTemplate = (data: EmailData): string => {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de Consulta - Marta López</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
  <table role="presentation" style="width: 100%; border-collapse: collapse; min-height: 100vh; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table role="presentation" style="width: 100%; max-width: 650px; border-collapse: collapse; background-color: #ffffff; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;">
          
          <!-- Header con animación visual -->
          <tr>
            <td align="center" style="padding: 50px 40px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); position: relative;">
              <!-- Icono de éxito -->
              <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">
                <span style="font-size: 60px;">✓</span>
              </div>
              <h1 style="margin: 0 0 15px; color: #1e293b; font-size: 36px; font-weight: 800; letter-spacing: -1px;">
                ¡Mensaje Recibido!
              </h1>
              <p style="margin: 0; color: #64748b; font-size: 18px; font-weight: 500;">
                Gracias por confiar en mis servicios, <strong style="color: #0284c7;">${data.name}</strong>
              </p>
            </td>
          </tr>
          
          <!-- Divider dorado -->
          <tr>
            <td style="padding: 0;">
              <div style="height: 6px; background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%);"></div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              
              <!-- Mensaje principal -->
              <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="margin: 0 0 20px; color: #1e293b; font-size: 24px; font-weight: 700;">
                  Tu consulta está en buenas manos
                </h2>
                <p style="margin: 0 0 15px; color: #475569; font-size: 16px; line-height: 1.8;">
                  He recibido tu mensaje y estoy emocionada de poder ayudarte a impulsar tu negocio inmobiliario con campañas de Meta efectivas y profesionales.
                </p>
                <p style="margin: 0; color: #475569; font-size: 16px; line-height: 1.8;">
                  <strong style="color: #0284c7;">Me pondré en contacto contigo en menos de 24 horas</strong> para hablar sobre cómo puedo ayudarte a conseguir más consultas y clientes.
                </p>
              </div>
              
              <!-- Promesas con iconos -->
              <table role="presentation" style="width: 100%; margin: 40px 0;">
                <tr>
                  <td style="padding: 20px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; border-left: 5px solid #0ea5e9;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 28px;">⚡</span>
                          </div>
                        </td>
                        <td style="padding-left: 20px;">
                          <h3 style="margin: 0 0 8px; color: #0284c7; font-size: 18px; font-weight: 700;">Respuesta Rápida</h3>
                          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">Te contactaré en menos de 24 horas para discutir tu proyecto y objetivos.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 16px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 16px; border-left: 5px solid #fbbf24;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 28px;">🎯</span>
                          </div>
                        </td>
                        <td style="padding-left: 20px;">
                          <h3 style="margin: 0 0 8px; color: #f59e0b; font-size: 18px; font-weight: 700;">Estrategia Personalizada</h3>
                          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">Diseñaré una propuesta adaptada específicamente a tu negocio y mercado.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 16px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border-radius: 16px; border-left: 5px solid #10b981;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50px; vertical-align: top;">
                          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 28px;">📈</span>
                          </div>
                        </td>
                        <td style="padding-left: 20px;">
                          <h3 style="margin: 0 0 8px; color: #059669; font-size: 18px; font-weight: 700;">Resultados Garantizados</h3>
                          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">Mi experiencia como agente inmobiliaria garantiza campañas que realmente funcionan.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA de urgencia -->
              <div style="margin: 50px 0 30px; padding: 30px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 20px; text-align: center;">
                <p style="margin: 0 0 20px; color: rgba(255,255,255,0.9); font-size: 18px; font-weight: 600;">
                  ¿Tienes alguna pregunta urgente?
                </p>
                <p style="margin: 0 0 25px; color: rgba(255,255,255,0.7); font-size: 15px;">
                  No esperes, contáctame ahora mismo por WhatsApp
                </p>
                <a href="https://wa.me/34608136529?text=Hola%20Marta,%20acabo%20de%20enviar%20el%20formulario%20y%20tengo%20una%20consulta" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);">
                  💬 Contactar por WhatsApp
                </a>
              </div>
              
              <!-- Información de contacto -->
              <div style="margin: 40px 0 0; padding: 30px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; text-align: center;">
                <p style="margin: 0 0 20px; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                  Otras formas de contacto
                </p>
                <div style="margin: 0;">
                  <a href="tel:+34608136529" style="display: inline-block; margin: 0 10px 10px; padding: 12px 24px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 10px; color: #0284c7; text-decoration: none; font-weight: 600; font-size: 14px;">
                    📞 +34 608 136 529
                  </a>
                  <a href="mailto:mblp66@gmail.com" style="display: inline-block; margin: 0 10px 10px; padding: 12px 24px; background: #ffffff; border: 2px solid #e2e8f0; border-radius: 10px; color: #0284c7; text-decoration: none; font-weight: 600; font-size: 14px;">
                    ✉️ mblp66@gmail.com
                  </a>
                </div>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer espectacular -->
          <tr>
            <td style="padding: 40px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); text-align: center;">
              <h3 style="margin: 0 0 15px; color: #ffffff; font-size: 20px; font-weight: 700;">
                Marta López
              </h3>
              <p style="margin: 0 0 20px; color: rgba(255,255,255,0.8); font-size: 15px; line-height: 1.6;">
                <strong>Especialista en Marketing Inmobiliario</strong><br>
                Gestión Profesional de Campañas en Meta<br>
                Para Agentes Inmobiliarios Independientes
              </p>
              <div style="margin: 25px 0; height: 2px; background: linear-gradient(90deg, transparent 0%, #fbbf24 50%, transparent 100%);"></div>
              <p style="margin: 0; color: rgba(255,255,255,0.5); font-size: 13px;">
                Este es un email automático de confirmación.<br>
                Recibirás mi respuesta personalizada muy pronto.
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
      subject: '✅ ¡Hemos recibido tu consulta! - Marta López',
      html: getConfirmationEmailTemplate(data),
      text: `
¡Gracias por contactarme, ${data.name}!

He recibido tu consulta y me pondré en contacto contigo en menos de 24 horas.

Si tienes alguna pregunta urgente, no dudes en contactarme:
- WhatsApp: +34 608 136 529
- Teléfono: +34 608 136 529
- Email: mblp66@gmail.com

Un saludo,
Marta López
Especialista en Marketing Inmobiliario
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Email de confirmación enviado a:', data.email)
  } catch (error) {
    console.error('❌ Error al enviar email de confirmación:', error)
  }
}

