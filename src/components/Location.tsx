'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const locations = [
  {
    id: 'alphaville',
    city: 'Alphaville',
    state: 'SP',
    badge: 'Unidade Principal',
    region: 'Alphaville · Barueri — SP',
    note: 'Endereço exato informado no agendamento',
    hours: [],
    phone: '(83) 98891-5177',
    mapUrl: 'https://maps.google.com/?q=Alphaville,Barueri,SP',
  },
]

export default function Location() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="localizacao"
      ref={ref}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-gold/6 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.28em] uppercase">
              Onde nos encontrar
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-semibold leading-[1.18] text-dark-primary mb-5">
            Nossa{' '}
            <span className="italic text-gold-gradient">Unidade</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Atendemos em Alphaville · Barueri, na Grande São Paulo, com toda a
            comodidade e sofisticação que nossas pacientes merecem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.8 }}
              className="group bg-white border border-beige-dark rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-gold-sm transition-all duration-400 shadow-premium card-premium"
            >
              {/* Map area */}
              <div className="relative h-44 sm:h-52 bg-gradient-to-br from-beige to-beige-dark overflow-hidden border-b border-beige-dark">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '38px 38px',
                  }}
                />
                {/* Simulated roads */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-dark-primary" />
                  <div className="absolute top-[58%] left-0 right-0 h-px bg-dark-primary/60" />
                  <div className="absolute left-[38%] top-0 bottom-0 w-px bg-dark-primary" />
                  <div className="absolute left-[65%] top-0 bottom-0 w-px bg-dark-primary/60" />
                </div>

                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-dark to-gold shadow-gold-md flex items-center justify-center text-white animate-float">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="w-2 h-2 bg-gold rounded-full mt-0.5 shadow-gold-sm" />
                </div>

                {/* City label */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-beige-dark/70 shadow-sm">
                    <span className="text-dark-secondary text-xs font-medium tracking-wide">
                      {loc.city}, {loc.state}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gold text-white text-[0.6rem] font-bold tracking-wide px-2.5 py-1 rounded-full">
                    {loc.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col gap-5">
                {/* City heading */}
                <div>
                  <h3 className="font-serif font-semibold text-dark-primary text-xl leading-tight">
                    {loc.city}
                  </h3>
                  <p className="text-dark-muted/60 text-xs tracking-wide mt-0.5">{loc.state} — Brasil</p>
                </div>

                {/* Info rows */}
                <div className="flex flex-col gap-4">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-dark-secondary text-sm font-medium">{loc.region}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-dark-secondary text-sm font-medium">{loc.phone}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-beige-darker to-transparent" />

                {/* CTA buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-beige border border-beige-dark text-dark-secondary text-xs font-medium hover:border-gold/50 hover:text-gold transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Ver no Maps
                  </a>
                  <a
                    href={`https://wa.me/5583988915177?text=Olá, gostaria de agendar na unidade de ${loc.city}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-gold-dark to-gold text-white text-xs font-semibold hover:shadow-gold-sm transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Agendar aqui
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
