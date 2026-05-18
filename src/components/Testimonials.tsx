'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const videos = [
  { id: '1193306359', label: 'Depoimento 01' },
  { id: '1193306361', label: 'Depoimento 02' },
  { id: '1193306362', label: 'Depoimento 03' },
  { id: '1193306360', label: 'Depoimento 04' },
  { id: '1193306390', label: 'Depoimento 05' },
  { id: '1193306407', label: 'Depoimento 06' },
  { id: '1193306400', label: 'Depoimento 07' },
  { id: '1193306404', label: 'Depoimento 08' },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return
    const child = scrollRef.current.children[idx] as HTMLElement
    child?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActiveIdx(idx)
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const idx = Math.round(scrollLeft / (offsetWidth * 0.76))
    setActiveIdx(Math.max(0, Math.min(idx, videos.length - 1)))
  }

  return (
    <section
      id="depoimentos"
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
        <source src="/images/3827434575-preview.mp4" type="video/mp4" />
      </video>

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gold/6 blur-[80px] pointer-events-none" />

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
              Depoimentos em Vídeo
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-[2rem] sm:text-[2.8rem] font-semibold leading-[1.18] text-dark-primary mb-4">
            Pacientes que{' '}
            <span className="italic text-gold-gradient">falam por si</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto font-light">
            Resultados reais, histórias reais. Assista ao que nossas pacientes dizem
            após os tratamentos com a Dra. Erika.
          </p>

          {/* Rating bar */}
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <Stars />
            <span className="font-semibold text-dark-primary text-sm">5.0</span>
            <span className="text-dark-muted/50 text-xs">· Avaliação Google</span>
          </div>
        </motion.div>

        {/* ── Mobile: horizontal snap scroll ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden"
        >
          {/* Scroll hint */}
          <p className="text-center text-dark-muted/50 text-xs mb-4 tracking-wide">
            ← Deslize para ver mais →
          </p>

          {/* Snap scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((v, i) => (
              <div
                key={v.id}
                className="snap-center shrink-0 w-[76vw] max-w-[300px]"
              >
                <VideoCard videoId={v.id} label={v.label} index={i} inView={inView} />
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-6 bg-gold' : 'w-1.5 bg-beige-darker'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Desktop: grid 3 colunas ── */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.65 }}
            >
              <VideoCard videoId={v.id} label={v.label} index={i} inView={inView} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-10 lg:mt-12"
        >
          <p className="text-dark-muted text-sm mb-5">
            Quer ser a próxima história de transformação?
          </p>
          <a
            href="https://wa.me/5583988915177?text=Olá, gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-semibold text-sm tracking-wide rounded-full shadow-gold-md hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function VideoCard({
  videoId,
  label,
  index,
  inView,
}: {
  videoId: string
  label: string
  index: number
  inView: boolean
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 55px rgba(0,0,0,0.10), 0 4px 16px rgba(201,168,76,0.14)' }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group bg-white rounded-2xl overflow-hidden border border-beige-dark shadow-premium hover:border-gold/30 transition-colors duration-300 flex flex-col"
    >
      {/* Video — portrait 9:16 */}
      <div className="relative w-full" style={{ paddingBottom: '177.77%' }}>
        {!playing ? (
          /* Thumbnail + Play button */
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group/play"
            aria-label={`Reproduzir ${label}`}
          >
            {/* Vimeo thumbnail */}
            <Image
              src={`https://vumbnail.com/${videoId}.jpg`}
              alt={label}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 76vw, 33vw"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/20 transition-colors duration-300" />
            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-gold-md group-hover/play:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/90 text-xs tracking-wide font-medium drop-shadow">
                Toque para assistir
              </p>
            </div>
          </button>
        ) : (
          /* Iframe embed */
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&playsinline=1`}
            title={label}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Card footer */}
      <div className="px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gold-50 border border-gold/20 flex items-center justify-center text-gold shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="text-dark-primary text-xs font-semibold leading-tight">
              Paciente Satisfeita
            </div>
            <div className="flex gap-0.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 fill-gold text-gold" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        {!playing && (
          <button
            onClick={() => setPlaying(true)}
            className="text-gold text-[0.7rem] font-semibold flex items-center gap-1 hover:text-gold-dark transition-colors"
          >
            Assistir
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  )
}
