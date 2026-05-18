'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WHATSAPP_NUMBER = '5583988915177'
const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dra. Erika! Gostaria de agendar uma avaliação.',
)

export default function CTAFinal() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32 bg-cream"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-beige" />
      <div className="absolute inset-0 bg-grid-subtle opacity-50" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Comece sua transformação
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold leading-[1.15] text-dark-primary mb-6"
        >
          Agende sua avaliação e{' '}
          <span className="italic text-gold-gradient">descubra a melhor</span>
          <br />
          <span className="text-dark-primary/80">versão da sua pele.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light mb-10"
        >
          Na consulta de avaliação, a Dra. Erika analisa seu histórico, sua pele e
          seus objetivos para criar um protocolo completamente personalizado,
          com foco em resultados expressivos e duradouros.
        </motion.p>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-dark-muted/70 text-xs font-medium tracking-wide">Agendamentos disponíveis agora</span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-semibold text-base sm:text-lg tracking-wide rounded-2xl shadow-gold-md hover:shadow-gold-lg transition-shadow duration-300 min-h-[56px] btn-shimmer btn-ring"
          >
            <svg
              className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar Consulta pelo WhatsApp
          </motion.a>
          <motion.a
            href="tel:+5583988915177"
            whileHover={{ scale: 1.03, borderColor: 'rgba(201,168,76,0.6)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border-2 border-dark-primary/15 text-dark-secondary font-medium text-base rounded-2xl hover:border-gold/60 hover:text-gold transition-colors duration-300 min-h-[56px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Ligar agora
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mt-10 text-dark-muted/60 text-xs"
        >
          {[
            'Avaliação Personalizada',
            'Sem compromisso',
            'Atendimento Premium',
            'Alphaville & Osasco',
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-1.5">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/40 hidden sm:block" />}
              <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
