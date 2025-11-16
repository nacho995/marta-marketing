'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Animation is now visible by default
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-accent-500/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-500/10 to-transparent animate-gradient-slow"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>

      {/* Gradient mesh effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className={`relative z-20 transform transition-all duration-1000 delay-100 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-3xl -z-10"></div>
              
              {/* Image container */}
              <div className="relative z-10 aspect-square max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl -z-10"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 h-full">
                  <img
                    src="/martahero.jpeg"
                    alt="Marta López - Especialista en Marketing Inmobiliario"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge on image */}
                <div className="absolute -bottom-6 -right-6 z-30 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-900">Agente Verificada</div>
                      <div className="text-xs text-gray-600">Especialista en Meta Ads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className={`text-center lg:text-left transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Floating badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Especialista en Marketing Inmobiliario</span>
              </div>
            </div>
            {/* Headline with gradient text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              <span className="block text-white mb-2">Más Consultas.</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient-x">
                Más Clientes.
              </span>
              <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-4">
                Sin Complicaciones.
              </span>
            </h1>

            {/* Subheadline with glassmorphism */}
            <div className="mb-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                Gestiono íntegramente tus campañas de <span className="font-bold text-accent-300">Facebook e Instagram</span> para que recibas más contactos de compradores y propietarios interesados.
              </p>
            </div>

            {/* Value proposition */}
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed">
              Soy <span className="font-bold text-white">Marta López</span>, agente inmobiliaria como tú. 
              Sé lo difícil que es captar inmuebles y clientes. Por eso he creado un servicio 
              especializado en publicidad digital para agentes independientes.
            </p>

            {/* CTA Buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quiero Más Consultas
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a 
                href="#servicios" 
                className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Ver Cómo Funciona
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Trust indicators with glassmorphism */}
            <div className="grid grid-cols-3 gap-4">
              <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-white/90 font-semibold text-xs md:text-sm">Inmobiliario</div>
                </div>
              </div>
              <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mb-1">0</div>
                  <div className="text-white/90 font-semibold text-xs md:text-sm">Formación</div>
                </div>
              </div>
              <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-white/90 font-semibold text-xs md:text-sm">Activas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

