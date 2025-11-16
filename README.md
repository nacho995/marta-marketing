# Marta Marketing - Landing Page

Sitio web profesional para gestión de campañas Meta (Facebook e Instagram) dirigido a agentes inmobiliarios independientes.

## 🚀 Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para estilos modernos y responsivos
- **Formulario de contacto funcional** con envío de emails via Nodemailer
- **Validación de formularios** con React Hook Form y Zod
- **Emails HTML profesionales** con confirmación automática al cliente
- **Botones de contacto flotantes** (WhatsApp, Teléfono, Email)
- **Tests completos** con Jest y Testing Library
- **Docker** ready para despliegue fácil
- **CI/CD** con GitHub Actions
- **Diseño responsive** optimizado para móviles y tablets
- **SEO optimizado** con meta tags apropiados

## 📋 Requisitos Previos

- Node.js 20 o superior
- npm o yarn
- Docker (opcional, para despliegue)

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/marta-marketing.git
cd marta-marketing

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus configuraciones SMTP

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 📧 Configuración de Email (IMPORTANTE)

Para que el formulario de contacto funcione correctamente, necesitas configurar las variables SMTP en `.env.local`:

#### Opción 1: Gmail (Recomendado para pruebas)

1. Activa la verificación en 2 pasos en tu cuenta de Google
2. Ve a [App Passwords](https://myaccount.google.com/apppasswords)
3. Genera una contraseña de aplicación para "Mail"
4. Configura en `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-contraseña-de-aplicacion
SMTP_FROM=noreply@martalopez.com
CONTACT_EMAIL=info@martalopez.com
```

#### Opción 2: Otros proveedores SMTP

Consulta la documentación de tu proveedor (SendGrid, Mailgun, AWS SES, etc.) y ajusta las variables correspondientes.

**Nota**: Sin configuración SMTP, el formulario seguirá funcionando en desarrollo pero los emails solo se mostrarán en la consola.

## 🧪 Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar linter
npm run lint
```

## 🏗️ Build

```bash
# Crear build de producción
npm run build

# Ejecutar build de producción
npm start
```

## 🐳 Docker

```bash
# Build de la imagen
docker build -t marta-marketing .

# Ejecutar el contenedor
docker run -p 3000:3000 marta-marketing

# O usar docker-compose
docker-compose up -d
```

## 📦 Estructura del Proyecto

```
marta-marketing/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/      # Endpoint de formulario
│   │   └── health/       # Health check
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales
├── components/            # Componentes React
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FloatingContact.tsx
├── lib/                  # Utilidades y servicios
│   └── email.ts         # Servicio de emails con Nodemailer
├── __tests__/            # Tests unitarios
│   ├── api/             # Tests de API
│   └── *.test.tsx       # Tests de componentes
├── public/               # Archivos estáticos
├── .github/workflows/    # CI/CD
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 🎨 Paleta de Colores

- **Primary (Azul)**: Confianza, profesionalismo
  - `#0ea5e9` (primary-500)
  - `#0284c7` (primary-600)
  
- **Accent (Dorado)**: Éxito, valor
  - `#fbbf24` (accent-300)
  - `#f59e0b` (accent-400)

## 🚀 Despliegue

El proyecto incluye configuración de CI/CD con GitHub Actions que:

1. Ejecuta tests automáticamente
2. Construye la imagen Docker
3. Despliega a producción (requiere configurar secrets)

### Secrets necesarios para CI/CD:

- `DOCKER_USERNAME`: Usuario de Docker Hub
- `DOCKER_PASSWORD`: Password de Docker Hub
- `DEPLOY_HOST`: IP/dominio del servidor
- `DEPLOY_USER`: Usuario SSH
- `DEPLOY_KEY`: Clave privada SSH

## 📝 Licencia

Todos los derechos reservados © 2025 Marta López

## 👥 Contacto

Para consultas sobre el proyecto o servicios:
- Email: info@martalopez.com
- Tel: +34 600 000 000

