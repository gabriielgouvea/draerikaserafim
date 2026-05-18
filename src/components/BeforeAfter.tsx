'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const results = [
  { id: 1,  src: '/images/antesedepois1.PNG' },
  { id: 2,  src: '/images/antesedepois2.PNG' },
  { id: 3,  src: '/images/antesedepois3.jpeg' },
  { id: 4,  src: '/images/antesedepois4.jpeg' },
  { id: 5,  src: '/images/antesedepois5.jpeg' },
  { id: 6,  src: '/images/antesedepois6.jpeg' },
  { id: 7,  src: '/images/antesedepois7.jpeg' },
  { id: 8,  src: '/images/antesedepois8.PNG' },
  { id: 9,  src: '/images/antesedepois9.PNG' },
  { id: 10, src: '/images/antesedepois10.PNG' },
  { id: 11, src: '/images/antesedepois11.PNG' },
  { id: 12, src: '/images/antesedepois12.jpeg' },
]

export default function BeforeAfter() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const prev = () =>
    setLightbox((i) => (i === null ? null : i === 0 ? results.length - 1 : i - 1))
  const next = () =>
    setLightbox((i) => (i === null ? null : i === results.length - 1 ? 0 : i + 1))

  return (
    <section id="antes-depois" ref={ref} className="section-padding bg-beige relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
      >
        <source src="/images/3984417135-preview.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-medium tracking-[0.28em] uppercase">
              Resultados Reais
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-[2rem] sm:text-[2.8rem] font-semibold leading-[1.18] text-dark-primary mb-4">
            Antes e{' '}
            <span className="italic text-gold-gradient">Depois</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Resultados reais de pacientes reais. Toque em qualquer imagem para
            ampliar e ver os detalhes da transformação.
          </p>
        </motion.div>

        {/* Grid de resultados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4">
          {results.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.04, y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.13), 0 4px 16px rgba(201,168,76,0.15)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 340, damping: 22 }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-beige-dark shadow-premium bg-beige-dark hover:border-gold/40 transition-colors duration-300"
            >
              <Image
                src={item.src}
                alt={`Resultado ${item.id} — Antes e Depois`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-dark-primary/0 group-hover:bg-dark-primary/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-dark-muted/50 text-sm mt-6"
        >
          * Resultados individuais podem variar. Imagens publicadas com consentimento das pacientes.
        </motion.p>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Imagem */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                style={{ aspectRatio: '4/3' }}>
                <Image
                  src={results[lightbox].src}
                  alt={`Resultado ${results[lightbox].id}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-gold text-white text-xs font-bold tracking-wide px-3 py-1 rounded-full">
                Resultado #{String(results[lightbox].id).padStart(2, '0')} de {results.length}
              </div>

              {/* Fechar */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                aria-label="Fechar"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            {/* Navegação anterior */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 active:scale-95 transition-all"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navegação próximo */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 active:scale-95 transition-all"
              aria-label="Próximo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {results.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                  className={`h-1 rounded-full transition-all duration-200 ${
                    i === lightbox ? 'w-5 bg-gold' : 'w-1 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
