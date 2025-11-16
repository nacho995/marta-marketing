import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-2xl overflow-hidden relative">
              <Image 
                src="/marta.jpeg" 
                alt="Marta López - Agente Inmobiliaria especializada en gestión de campañas Meta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-300 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sé Exactamente Lo Que <span className="text-primary-600">Necesitas</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-primary-600">Soy agente inmobiliaria independiente</span> desde hace años. 
                He vivido en primera persona la dificultad de captar inmuebles y conseguir clientes compradores sin gastar una fortuna en publicidad tradicional.
              </p>
              
              <p>
                Durante mi carrera, aprendí que <span className="font-semibold">Facebook e Instagram son las plataformas más potentes</span> para llegar a personas que realmente quieren comprar o vender, pero también descubrí que gestionarlas correctamente requiere tiempo, conocimiento y dedicación constante.
              </p>
              
              <p>
                Por eso decidí especializarme en publicidad digital y crear este servicio: 
                <span className="font-semibold text-primary-600"> para ayudar a otros agentes como tú a conseguir más consultas sin tener que convertirse en expertos en marketing.</span>
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border-l-4 border-primary-600">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Mi compromiso:
              </p>
              <p className="text-gray-700">
                Trabajar tus campañas con la misma dedicación y cuidado que pondría en las mías propias, 
                porque entiendo perfectamente el valor de cada consulta y cada oportunidad de negocio.
              </p>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Hablemos de Tu Negocio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

