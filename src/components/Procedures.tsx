'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const procedures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Laser CO₂',
    subtitle: 'Renovação Cutânea Profunda',
    description:
      'Laser CO₂ Fracionado é uma tecnologia avançada que promove renovação profunda da pele, estímulo intenso de colágeno e melhora da flacidez, inclusive das pálpebras, além de rugas, poros, manchas e textura cutânea com precisão e segurança.',
    badge: 'Alta Tecnologia',
    image: '/images/proc-laser-co2.png',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Peeling Regenerativo',
    subtitle: 'Renovação & Luminosidade',
    description:
      'Peeling ATA com Croton promove uma renovação cutânea intensa e profunda, estimulando regeneração celular e reorganização do colágeno. Indicado para flacidez, rugas, textura irregular e aspecto craquelado da pele, proporcionando uma pele visivelmente mais firme, uniforme e rejuvenescida.',
    badge: 'Resultados Rápidos',
    image: '/images/proc-peeling.png',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Reestruturação Facial',
    subtitle: 'Harmonização Avançada',
    description:
      'Abordagem multidisciplinar completa que combina técnicas modernas para restaurar os volumes, contornos e proporções naturais do rosto, com resultados harmônicos e duradouros.',
    badge: 'Exclusivo',
    image: '/images/proc-reestruturacao.png',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Harmonização Masculina',
    subtitle: 'Definição & Traços Naturais',
    description:
      'A Harmonização Masculina com reestruturação facial valoriza traços fortes e naturais, promovendo mais definição, sustentação e equilíbrio ao rosto masculino. Um tratamento personalizado que melhora contornos, projeção facial e sinais do envelhecimento sem perder a masculinidade.',
    badge: 'Natural',
    image: '/images/proc-harmonizacao-masculina.jpg',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Toxina Botulínica',
    subtitle: 'Suavização & Expressão Equilibrada',
    description:
      'Aplicação estratégica e refinada de toxina botulínica para suavizar linhas de expressão, prevenir o envelhecimento e equilibrar a harmonia facial com resultado absolutamente natural.',
    badge: 'Mais Procurado',
    image: '/images/proc-botox.jpg',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.636 5.636l.707.707m11.314 11.314l.707.707M5.636 18.364l.707-.707m11.314-11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: 'Estimulação Natural de Colágeno',
    subtitle: 'Rejuvenescimento Inteligente',
    description:
      'Protocolos integrados com microagulhamento, fios de PDO, PDRN e outros ativos avançados que estimulam a regeneração natural da pele, restaurando estrutura e vitalidade.',
    badge: 'Regenerativo',
    image: '/images/proc-colageno.jpg',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
          d="M12 4v16m0-16c-1.5 2-3 3-5 3m5-3c1.5 2 3 3 5 3M12 20c-1.5-2-3-3-5-3m5 3c1.5-2 3-3 5-3" />
      </svg>
    ),
    title: 'Subcisão',
    subtitle: 'Tratamento Exclusivo para Celulite',
    description:
      'Técnica minimamente invasiva com agulha especial indicada exclusivamente para o tratamento de celulite. Rompe as fibras responsáveis pela depressão na pele, promovendo superfície mais lisa e uniforme com resultados altamente eficazes.',
    badge: 'Especializado',
    image: '/images/proc-subcisao-v2.jpg',
  },
]

const badgeColors: Record<string, string> = {
  'Alta Tecnologia': 'bg-gold-50 text-gold-dark border-gold/20',
  'Resultados Rápidos': 'bg-gold-50 text-gold-dark border-gold/20',
  Exclusivo: 'bg-gold-50 text-gold-dark border-gold/20',
  Natural: 'bg-gold-50 text-gold-dark border-gold/20',
  'Mais Procurado': 'bg-gold-50 text-gold-dark border-gold/20',
  Regenerativo: 'bg-gold-50 text-gold-dark border-gold/20',
  Especializado: 'bg-gold-50 text-gold-dark border-gold/20',
}

export default function Procedures() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return
    const child = scrollRef.current.children[idx] as HTMLElement
    child?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActiveIdx(idx)
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const idx = Math.round(scrollLeft / (offsetWidth * 0.82))
    setActiveIdx(Math.max(0, Math.min(idx, procedures.length - 1)))
  }

  return (
    <section
      id="procedimentos"
      ref={ref}
      className="section-padding bg-gradient-beige relative overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
      >
        <source src="/images/Tratamentos%20que%20transformam.mp4" type="video/mp4" />
      </video>

      {/* Background ornament */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gold-50/80 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.28em] uppercase">
              Procedimentos
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-semibold leading-[1.18] text-dark-primary mb-5">
            Tratamentos que{' '}
            <span className="italic text-gold-gradient">transformam</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Cada protocolo é cuidadosamente selecionado e personalizado para realçar
            sua beleza natural com segurança e resultados que você percebe.
          </p>
        </motion.div>

        {/* ── Mobile: carrossel horizontal ── */}
        <div className="lg:hidden">
          <p className="text-center text-dark-muted/50 text-xs mb-4 tracking-wide">
            ← Deslize para ver mais →
          </p>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {procedures.map((proc, i) => (
              <div key={proc.title} className="snap-center shrink-0 w-[82vw] max-w-[320px]">
                <ProcedureCard proc={proc} i={i} inView={inView} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-5">
            {procedures.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-6 bg-gold' : 'w-1.5 bg-beige-darker'
                }`}
                aria-label={`Procedimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: flex wrap centralizado ── */}
        <div className="hidden lg:flex lg:flex-wrap justify-center gap-5">
          {procedures.map((proc, i) => (
            <div key={proc.title} className="w-[calc(25%-15px)]">
              <ProcedureCard proc={proc} i={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* CTA — espaço extra no mobile após carrossel */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-dark-muted text-sm mb-5">
            Não sabe qual tratamento é ideal para você?
          </p>
          <a
            href="https://wa.me/5583988915177"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-semibold text-sm tracking-wide rounded-full hover:shadow-gold-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 btn-shimmer btn-ring"
          >
            Agende sua Avaliação
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

type Procedure = (typeof procedures)[number]

function ProcedureCard({ proc, i, inView }: { proc: Procedure; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8, scale: 1.015, boxShadow: '0 28px 60px rgba(0,0,0,0.10), 0 6px 20px rgba(201,168,76,0.18)' }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22, delay: inView ? 0.08 * i : 0, duration: 0.65 }}
      className="group relative bg-white/45 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden flex flex-col hover:border-gold/40 hover:bg-white/60 cursor-pointer transition-colors duration-300 h-full"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
    >
      {/* Foto do procedimento */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={proc.image}
          alt={proc.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`text-[0.7rem] font-semibold tracking-wide px-2.5 py-1 rounded-full border backdrop-blur-sm ${
              badgeColors[proc.badge] ?? 'bg-gold-50 text-gold border-gold/20'
            }`}
          >
            {proc.badge}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col gap-3.5 flex-1">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shrink-0 mt-0.5">
            {proc.icon}
          </div>
          <div>
            <h3 className="font-serif font-semibold text-dark-primary text-[1.05rem] leading-snug group-hover:text-gold transition-colors duration-300">
              {proc.title}
            </h3>
            <p className="text-gold text-[0.7rem] font-medium tracking-wide mt-0.5 uppercase">
              {proc.subtitle}
            </p>
          </div>
        </div>

        <p className="text-dark-muted/80 text-sm leading-[1.75] font-light flex-1">
          {proc.description}
        </p>

        <div className="flex items-center gap-1.5 text-gold text-[0.75rem] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          Saiba mais
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
