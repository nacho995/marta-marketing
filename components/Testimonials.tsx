export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Martínez',
      role: 'Agente Inmobiliario Independiente',
      location: 'Madrid',
      text: 'Antes gastaba dinero en portales sin ver resultados claros. Desde que Marta gestiona mis campañas, recibo consultas cada semana y el coste por contacto es mucho más bajo. Lo mejor es que no tengo que preocuparme de nada.',
      rating: 5,
    },
    {
      name: 'Laura Sánchez',
      role: 'Agente Inmobiliaria',
      location: 'Valencia',
      text: 'Lo que más valoro es que Marta habla mi idioma. Entiende perfectamente las necesidades del sector inmobiliario y sabe cómo captar el tipo de clientes que busco. Los informes son claros y veo resultados reales.',
      rating: 5,
    },
    {
      name: 'Javier Ruiz',
      role: 'Agente Inmobiliario',
      location: 'Sevilla',
      text: 'Intenté gestionar yo mismo las campañas pero era un caos. Marta lo hace todo: diseño, configuración, seguimiento... Ahora tengo más tiempo para atender clientes y cerrar operaciones. 100% recomendable.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Lo Que Dicen <span className="text-primary-600">Otros Agentes</span>
          </h2>
          <p className="section-subtitle">
            Agentes inmobiliarios independientes que ya están recibiendo más consultas gracias a sus campañas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-6 h-6 text-accent-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-primary-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results highlight */}
        <div className="mt-16 bg-white rounded-3xl p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">+150</div>
              <div className="text-gray-700 font-medium">Consultas Generadas</div>
              <div className="text-sm text-gray-500 mt-1">en los últimos 3 meses</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">93%</div>
              <div className="text-gray-700 font-medium">Tasa de Satisfacción</div>
              <div className="text-sm text-gray-500 mt-1">de agentes que repiten</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">-40%</div>
              <div className="text-gray-700 font-medium">Coste por Consulta</div>
              <div className="text-sm text-gray-500 mt-1">vs. publicidad tradicional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

