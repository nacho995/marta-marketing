export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Conversación Inicial',
      description: 'Hablamos de tu negocio, tus objetivos y el tipo de clientes que buscas captar.',
    },
    {
      number: '02',
      title: 'Diseño de Estrategia',
      description: 'Creo una estrategia personalizada con anuncios diseñados específicamente para tu marca y zona.',
    },
    {
      number: '03',
      title: 'Lanzamiento de Campañas',
      description: 'Pongo en marcha tus campañas en Facebook e Instagram con segmentación precisa.',
    },
    {
      number: '04',
      title: 'Optimización Continua',
      description: 'Monitoreo y ajusto las campañas diariamente para maximizar resultados y reducir costes.',
    },
    {
      number: '05',
      title: 'Informes y Resultados',
      description: 'Recibes informes claros con métricas importantes y los contactos generados.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Cómo <span className="text-primary-600">Funciona</span>
          </h2>
          <p className="section-subtitle">
            Un proceso simple y efectivo diseñado para que empieces a recibir consultas lo antes posible.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-8">
                  <div className="text-5xl font-black text-primary-100 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            <span className="font-semibold text-primary-600">Todo el proceso es transparente y sin letra pequeña.</span> Tú decides cuándo empezar y tienes control total sobre tu inversión publicitaria.
          </p>
          <a href="#contact" className="btn-primary">
            Empezar Mi Campaña
          </a>
        </div>
      </div>
    </section>
  )
}

