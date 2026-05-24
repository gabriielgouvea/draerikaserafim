'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WHATSAPP_NUMBER = '5583988915177'

export default function Location() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="localizacao"
      ref={ref}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-gold/6 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.28em] uppercase">
              Onde nos encontrar
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-semibold leading-[1.18] text-dark-primary mb-4">
            Nossa{' '}
            <span className="italic text-gold-gradient">Unidade</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Localizada em Alphaville · Barueri, um dos centros de excelência
            médica e estética da Grande São Paulo.
          </p>
        </motion.div>

        {/* Split layout — info + mapa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-beige-dark shadow-premium-lg"
        >

          {/* ── Painel de informações ── */}
          <div className="bg-white flex flex-col justify-between gap-8 p-8 sm:p-10 order-2 lg:order-1">

            {/* Localização */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <span className="inline-flex self-start items-center gap-2 bg-gold-50 border border-gold/25 text-gold text-[0.7rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Unidade Principal
              </span>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-dark-primary leading-tight">
                  Alphaville
                </h3>
                <p className="text-gold text-sm font-medium mt-1 tracking-wide">
                  Barueri — São Paulo
                </p>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-4">
                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                    <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-dark-secondary font-medium text-sm">Alphaville · Barueri — SP</p>
                    <p className="text-dark-muted text-xs mt-0.5">Endereço exato informado no agendamento</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-dark-secondary font-medium text-sm hover:text-gold transition-colors">
                    (83) 98891-5177
                  </a>
                </div>

                {/* Atendimento */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-dark-secondary font-medium text-sm">Segunda a Sábado</p>
                    <p className="text-dark-muted text-xs mt-0.5">Horário informado no agendamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-beige-darker to-transparent" />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de agendar uma consulta em Alphaville.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white text-sm font-semibold tracking-wide hover:shadow-gold-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Alphaville,Barueri,SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-beige-dark text-dark-secondary text-sm font-medium hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* ── Mapa interativo ── */}
          <div className="relative h-[320px] lg:h-auto min-h-[420px] order-1 lg:order-2">
            <iframe
              src="https://maps.google.com/maps?q=Alphaville,Barueri,SP,Brazil&z=14&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização — Alphaville, Barueri SP"
            />
            {/* Overlay badge sobre o mapa */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-premium border border-beige-dark/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-primary font-semibold text-xs leading-tight">Dra. Erika Serafim</p>
                  <p className="text-dark-muted text-[0.65rem] leading-tight">Alphaville · Barueri, SP</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
