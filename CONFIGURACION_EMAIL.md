# 📧 Guía de Configuración de Email

Esta guía te ayudará a configurar el sistema de emails del formulario de contacto.

## ⚡ Configuración Rápida (Gmail)

### Paso 1: Preparar tu cuenta de Gmail

1. Ve a tu cuenta de Google: https://myaccount.google.com
2. Navega a **Seguridad**
3. Activa la **Verificación en 2 pasos** (si no está activada)

### Paso 2: Generar contraseña de aplicación

1. Ve a https://myaccount.google.com/apppasswords
2. Selecciona "Correo" en la lista de aplicaciones
3. Selecciona "Otro" en dispositivos
4. Escribe "Marta Marketing" como nombre
5. Haz clic en **Generar**
6. **Copia la contraseña de 16 caracteres** que aparece

### Paso 3: Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # La contraseña de 16 caracteres
SMTP_FROM=tu-email@gmail.com

# Email donde recibirás las consultas
CONTACT_EMAIL=tu-email@gmail.com
```

**Reemplaza:**
- `tu-email@gmail.com` con tu email real
- `xxxx xxxx xxxx xxxx` con la contraseña generada en el Paso 2

### Paso 4: Probar

```bash
npm run dev
```

Ve a http://localhost:3000, llena el formulario y verifica que recibes el email.

---

## 🔧 Otros Proveedores SMTP

### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=tu-api-key-de-sendgrid
SMTP_FROM=noreply@tudominio.com
CONTACT_EMAIL=info@tudominio.com
```

### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@tudominio.mailgun.org
SMTP_PASSWORD=tu-password-de-mailgun
SMTP_FROM=noreply@tudominio.com
CONTACT_EMAIL=info@tudominio.com
```

### AWS SES

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=tu-access-key-id
SMTP_PASSWORD=tu-secret-access-key
SMTP_FROM=noreply@tudominio.com
CONTACT_EMAIL=info@tudominio.com
```

### Office 365 / Outlook

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=tu-email@outlook.com
SMTP_PASSWORD=tu-contraseña
SMTP_FROM=tu-email@outlook.com
CONTACT_EMAIL=tu-email@outlook.com
```

---

## 🧪 Modo de Desarrollo (Sin SMTP)

Si no configuras las variables SMTP, la aplicación funcionará de todas formas:

- Los formularios se validarán correctamente
- Los datos se procesarán
- Los emails se **simularán** y aparecerán en la consola del servidor
- **NO se enviarán emails reales**

Esto es útil para desarrollo y pruebas.

---

## 🚀 Producción

### Variables de Entorno en Producción

En producción, configura las variables de entorno según tu plataforma:

#### Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable SMTP_*
4. Redeploy

#### Docker

Agrega las variables al `docker-compose.yml`:

```yaml
services:
  web:
    environment:
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=587
      - SMTP_USER=tu-email@gmail.com
      - SMTP_PASSWORD=tu-contraseña
      - SMTP_FROM=tu-email@gmail.com
      - CONTACT_EMAIL=tu-email@gmail.com
```

O crea un archivo `.env` y úsalo:

```bash
docker-compose --env-file .env up -d
```

---

## 📝 Personalización de Emails

### Modificar plantillas HTML

Los emails se generan en `lib/email.ts`. Puedes personalizar:

1. **Email a Marta (notificación)**: Función `getEmailTemplate()`
2. **Email de confirmación al cliente**: Función `sendConfirmationEmail()`

### Cambiar el remitente

Modifica `SMTP_FROM` en las variables de entorno.

### Cambiar destinatario

Modifica `CONTACT_EMAIL` para cambiar quién recibe las consultas.

---

## ❓ Problemas Comunes

### "Error: Invalid login"

- Verifica que la contraseña de aplicación es correcta
- En Gmail, asegúrate de que la verificación en 2 pasos está activa

### "Error: Connection timeout"

- Verifica el SMTP_HOST y SMTP_PORT
- Comprueba que no hay firewall bloqueando el puerto 587

### No recibo emails

1. Verifica que las variables estén bien configuradas
2. Revisa la carpeta de spam
3. Comprueba los logs del servidor para ver si hay errores

### Los emails van a spam

- Configura SPF, DKIM y DMARC en tu dominio
- Usa un email con tu propio dominio (no @gmail.com)
- Considera usar un servicio profesional como SendGrid

---

## 🔒 Seguridad

### ⚠️ Importante

- **NUNCA** subas el archivo `.env.local` a GitHub
- Usa contraseñas de aplicación, no tu contraseña principal
- En producción, usa secretos encriptados
- Rota las contraseñas periódicamente

### Proteger variables sensibles

El archivo `.env.local` está en `.gitignore` por defecto. Verifica que no se suba accidentalmente:

```bash
git status  # No debe aparecer .env.local
```

---

## 📞 Contacto Directo

Además del formulario, la web incluye botones flotantes para:

- **WhatsApp**: Modifica el número en `components/FloatingContact.tsx`
- **Teléfono**: Modifica el número en `components/FloatingContact.tsx` y `components/Footer.tsx`
- **Email directo**: Modifica el email en `components/FloatingContact.tsx` y `components/Footer.tsx`

Busca y reemplaza `+34600000000` y `info@martalopez.com` con los datos reales de contacto.

---

¿Necesitas ayuda? Revisa la documentación de tu proveedor SMTP o abre un issue en GitHub.

