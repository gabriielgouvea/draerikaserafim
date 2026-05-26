'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '+30',
    unit: 'Anos',
    label: 'de Experiência',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: '+15.000',
    unit: '',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    value: '100%',
    unit: '',
    label: 'Protocolos Personalizados',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    value: 'Premium',
    unit: '',
    label: 'Atendimento Exclusivo',
  },
]

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Tecnologia e ciência a seu favor',
    text: 'Utilizo os equipamentos e protocolos mais avançados disponíveis no mercado, sempre aliados ao rigor científico e à constante atualização técnica para garantir resultados seguros e duradouros.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Individualidade acima de tudo',
    text: 'Não existem protocolos genéricos aqui. Cada plano de tratamento é desenhado exclusivamente para você — respeitando sua essência, sua beleza e o que te faz única.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança e responsabilidade',
    text: 'Cada procedimento é realizado com rigor técnico, insumos certificados e total transparência. Você está em mãos experientes e comprometidas com a sua saúde e bem-estar.',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden">

      {/* ── Bloco 1: Bio + Credenciais ── */}
      <div className="section-padding bg-cream relative overflow-hidden">
        {/* Background video — mobile (9:16) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="block sm:hidden absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        >
          <source src="/images/mobile videofundo.mp4" type="video/mp4" />
        </video>
        {/* Background video — desktop (16:9) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        >
          <source src="/images/desktop videofundo.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — Foto perfil */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
                {/* Gold corners */}
                <div className="absolute -top-5 -left-5 w-16 h-16 border-t-2 border-l-2 border-gold rounded-tl-lg z-10" />
                <div className="absolute -bottom-5 -right-5 w-16 h-16 border-b-2 border-r-2 border-gold rounded-br-lg z-10" />

                <div className="relative aspect-square rounded-2xl overflow-hidden border border-beige-darker shadow-premium-lg bg-beige-dark">
                  <Image
                    src="/images/avaliando paciente.jpeg"
                    alt="Dra. Erika Serafim — Biomédica Esteta"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Tag — CRBio */}
                <a
                  href="https://crbm1.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl px-5 py-4 shadow-premium border border-beige-dark flex items-center gap-3.5 hover:border-gold/40 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-dark-primary font-semibold text-sm">Biomédica Esteta</div>
                    <div className="text-dark-muted text-xs tracking-wide">CRBM 63838</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right — Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-col gap-7 mt-10 lg:mt-0"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">
                  Sobre a Especialista
                </span>
              </div>

              <h2 className="font-serif text-[2.2rem] sm:text-[2.6rem] font-semibold leading-[1.18] text-dark-primary">
                Dedicação e excelência{' '}
                <span className="italic text-gold-gradient">a cada tratamento</span>
              </h2>

              <div className="flex flex-col gap-4 text-dark-secondary/80 text-base leading-[1.85] font-light">
                <p>
                  Sou formada em Biomedicina com especialização em Estética Avançada,
                  e ao longo de mais de{' '}
                  <strong className="font-semibold text-dark-primary">30 anos de carreira</strong>{' '}
                  construí uma trajetória marcada pela excelência, pela atualização
                  constante e pelo profundo respeito à individualidade de cada paciente.
                </p>
                <p>
                  Combino as mais modernas tecnologias em rejuvenescimento facial com
                  uma visão artística refinada — entregando resultados que preservam
                  a naturalidade e realçam a beleza autêntica de cada pessoa,
                  sem artificialidades ou excessos.
                </p>
                <p>
                  Atendo na unidade de{' '}
                  <span className="text-gold font-medium">Alphaville · Barueri (SP)</span>, com um
                  atendimento personalizado, sofisticado e pautado na segurança e na ciência.
                </p>
              </div>

              <div className="gold-divider-left" />

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ y: -5, scale: 1.02, boxShadow: '0 16px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(201,168,76,0.14)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="bg-white border border-beige-dark rounded-xl p-4 flex items-start gap-3.5 shadow-premium hover:border-gold/30 cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-50 border border-gold/20 flex items-center justify-center shrink-0 text-gold mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-dark-primary leading-tight">
                        {item.value}
                        {item.unit && <span className="text-gold text-sm ml-0.5">{item.unit}</span>}
                      </div>
                      <div className="text-dark-muted text-xs leading-tight mt-0.5 tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bloco 2: Foto em atendimento + Filosofia ── */}
      <div className="section-padding bg-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex flex-col gap-8 order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">
                  Filosofia de Atendimento
                </span>
              </div>

              <h2 className="font-serif text-[2rem] sm:text-[2.4rem] font-semibold leading-[1.2] text-dark-primary">
                Cada rosto conta{' '}
                <span className="italic text-gold-gradient">uma história única</span>
              </h2>

              {/* Quote destacado */}
              <blockquote className="relative pl-5 border-l-2 border-gold">
                <p className="font-serif text-[1.05rem] italic text-dark-secondary leading-relaxed">
                  "Antes de qualquer procedimento, eu escuto. Entendo quem é você,
                  o que te incomoda, o que você deseja. Só assim consigo criar um
                  tratamento que é verdadeiramente seu."
                </p>
                <footer className="mt-3 text-gold text-sm font-medium tracking-wide">
                  — Dra. Erika Serafim
                </footer>
              </blockquote>

              {/* Pilares */}
              <div className="flex flex-col gap-5">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.65 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-beige-dark flex items-center justify-center shrink-0 text-gold shadow-premium group-hover:border-gold/40 group-hover:shadow-gold-sm transition-all duration-300 mt-0.5">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-primary text-sm mb-1">
                        {p.title}
                      </h3>
                      <p className="text-dark-muted/80 text-sm leading-[1.75] font-light">
                        {p.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Foto em atendimento */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[420px]">
                {/* Decorative gold corners */}
                <div className="absolute -top-5 -right-5 w-16 h-16 border-t-2 border-r-2 border-gold rounded-tr-lg z-10" />
                <div className="absolute -bottom-5 -left-5 w-16 h-16 border-b-2 border-l-2 border-gold rounded-bl-lg z-10" />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-beige-darker shadow-premium-lg bg-beige-dark">
                  {/*
                    Foto: public/images/dr-erika-about.jpg
                    Sugestão: foto dela realizando um procedimento/avaliação em paciente
                  */}
                  <Image
                    src="/images/avaliando paciente deitada na maca com vista bonita no fundo.jpeg"
                    alt="Dra. Erika Serafim realizando avaliação"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating tag — atenção */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-4 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-premium border border-beige-dark text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-dark-primary font-semibold text-sm">Avaliação Inicial</span>
                  </div>
                  <p className="text-dark-muted text-[0.72rem] leading-snug">
                    Antes de qualquer procedimento, converse com a Dra. Erika e receba uma orientação personalizada.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}
