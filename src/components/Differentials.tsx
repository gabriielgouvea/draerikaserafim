'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const differentials = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    number: '01',
    title: 'Atendimento Personalizado',
    description:
      'Cada paciente recebe um protocolo único, desenvolvido exclusivamente para seu perfil, necessidades e objetivos. Nada é padronizado — tudo é feito sob medida.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    number: '02',
    title: 'Harmonia Facial',
    description:
      'Cada intervenção é planejada para realçar e revelar a beleza autêntica de cada paciente, respeitando as proporções do rosto e preservando a expressão única de quem você é.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    number: '03',
    title: 'Tecnologia Avançada',
    description:
      'Investimento constante em equipamentos de última geração e técnicas inovadoras, para oferecer o que há de mais eficaz e seguro na estética médica mundial.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    number: '04',
    title: 'Ambiente Sofisticado',
    description:
      'Espaços cuidadosamente projetados para proporcionar conforto, privacidade e uma experiência sensorial premium desde o momento da chegada.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    number: '05',
    title: 'Protocolos Modernos',
    description:
      'Baseados nas mais recentes evidências científicas internacionais, nossos protocolos são continuamente atualizados para garantir a máxima eficácia e segurança.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    number: '06',
    title: 'Rejuvenescimento Inteligente',
    description:
      'Uma abordagem estratégica e progressiva que trabalha em harmonia com seu organismo, potencializando os processos naturais de regeneração e renovação.',
  },
]

export default function Differentials() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
      >
        <source src="/images/3830897733-preview.mp4" type="video/mp4" />
      </video>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[0.28em] uppercase">
                Por que nos escolher
              </span>
            </div>
            <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[2.6rem] xl:text-[3rem] font-semibold leading-[1.2] text-dark-primary mb-6">
              O que nos{' '}
              <span className="italic text-gold-gradient">torna únicos</span>
            </h2>
            <p className="text-dark-muted text-base leading-relaxed font-light mb-8">
              Uma combinação única de experiência, tecnologia e sensibilidade artística
              que resulta em tratamentos verdadeiramente transformadores.
            </p>

            {/* CTA card */}
            <div className="bg-warm-dark rounded-2xl p-6 border border-white/8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-subtle opacity-20" />
              <div className="relative z-10">
                <div className="text-gold-light font-serif text-lg font-semibold mb-2">
                  Pronta para começar?
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  Agende uma avaliação e descubra o protocolo ideal para você.
                </p>
                <a
                  href="https://wa.me/5583988915177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-white text-sm font-semibold rounded-full hover:shadow-gold-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 btn-shimmer btn-ring"
                >
                  Agendar Avaliação
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {differentials.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -7, scale: 1.015, boxShadow: '0 24px 50px rgba(0,0,0,0.09), 0 4px 16px rgba(201,168,76,0.16)' }}
                whileTap={{ scale: 0.975 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group bg-white border border-beige-dark/70 rounded-2xl p-6 hover:border-gold/40 transition-colors duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Number background */}
                <div className="absolute top-4 right-5 font-serif text-[3.5rem] font-bold text-beige-darker/60 leading-none pointer-events-none select-none group-hover:text-gold-100 transition-colors duration-300">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gold-50 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="relative z-10 font-serif font-semibold text-dark-primary text-[1.05rem] leading-snug mb-2.5 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-dark-muted/80 text-sm leading-[1.75] font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
