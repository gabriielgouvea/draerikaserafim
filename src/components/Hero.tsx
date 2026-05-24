'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_NUMBER = '5583988915177'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-cream">
      {/* Foto de fundo da clínica */}
      <Image
        src="/images/clinica-fundo-v4.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay degradê — opaco no lado do texto, translúcido no lado da foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/68 to-cream/40 lg:to-cream/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/40" />
      <div className="absolute inset-0 bg-grid-subtle opacity-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-12 sm:pb-16">

        {/* ── Mobile layout: foto topo, texto baixo ── */}
        {/* ── Desktop layout: texto esquerda, foto direita ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center gap-8">

          {/* Foto — aparece PRIMEIRO no mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Ring decorativo — só desktop */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-gold/10 animate-spin-slow" />
            </div>

            {/* Foto container */}
            <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[400px] lg:h-[530px]">
              {/* Gold corners */}
              <div className="absolute -top-3 -left-3 w-10 h-10 lg:w-14 lg:h-14 border-t-2 border-l-2 border-gold/60 rounded-tl-xl z-20" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 lg:w-14 lg:h-14 border-b-2 border-r-2 border-gold/60 rounded-br-xl z-20" />

              <div className="relative w-full h-full rounded-[1.25rem] lg:rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12),_0_4px_20px_rgba(201,168,76,0.10)] border border-beige-darker/60">
                <Image
                  src="/images/sentada na cadeira branca.PNG"
                  alt="Dra. Erika Serafim — Biomédica Esteta"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-beige-dark/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating card — experiência */}
              <motion.div
                initial={{ opacity: 0, x: -15, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-4 sm:-left-10 lg:-left-12 top-[62%] sm:top-[30%] bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 shadow-premium border border-beige-dark/80"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gold-50 border border-gold/25 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-dark-primary text-[0.68rem] sm:text-xs font-semibold leading-tight">Especialista em</div>
                    <div className="text-gold text-[0.6rem] sm:text-[0.65rem] font-medium leading-tight">Rejuvenescimento Facial</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — anos */}
              <motion.div
                initial={{ opacity: 0, x: 15, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 sm:-right-8 lg:-right-10 bottom-[28%] bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-premium border border-beige-dark/80 text-center"
              >
                <div className="text-gold font-serif font-bold text-xl sm:text-2xl leading-none">+30</div>
                <div className="text-dark-muted text-[0.58rem] sm:text-[0.6rem] tracking-wide mt-0.5 leading-tight">
                  Anos de<br />Experiência
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy — aparece SEGUNDO no mobile, PRIMEIRO no desktop */}
          <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
              className="flex flex-col items-center sm:items-start gap-1.5"
            >
              <span className="h-px w-10 bg-gradient-to-r from-gold-dark to-gold" />
              <span className="text-gold text-[0.65rem] sm:text-xs font-medium tracking-[0.25em] uppercase text-center sm:text-left">
                Biomédica Esteta
              </span>
              <span className="text-gold/70 text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.2em] uppercase text-center sm:text-left">
                Alphaville · Barueri — SP
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.22}
              className="font-serif text-[2.1rem] sm:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.5rem] font-semibold leading-[1.15] text-dark-primary"
            >
              Rejuvenescimento{' '}
              <span className="italic text-gold-gradient">Facial Avançado</span>{' '}
              com Naturalidade{' '}
              <span className="text-dark-secondary/80">e Sofisticação.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-lg font-light"
            >
              Mais de <span className="text-gold font-medium">30 anos</span> dedicados a
              realçar a beleza natural de cada paciente, unindo ciência, tecnologia
              de ponta e um olhar estético verdadeiramente refinado.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.36}
              className="gold-divider-left"
            />

            {/* CTAs — botões grandes e touch-friendly */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.43}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de agendar uma avaliação.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-semibold text-sm tracking-wide rounded-2xl shadow-gold-md hover:shadow-gold-lg transition-shadow duration-300 min-h-[52px] btn-shimmer btn-ring"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar Avaliação
              </motion.a>
              <motion.a
                href="#sobre"
                whileHover={{ scale: 1.03, borderColor: 'rgba(201,168,76,0.6)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="flex items-center justify-center gap-2 px-6 py-4 border border-dark-primary/15 text-dark-secondary hover:border-gold/60 hover:text-gold font-medium text-sm tracking-wide rounded-2xl transition-colors duration-300 min-h-[52px]"
              >
                Conheça a Dra. Erika
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
              className="flex items-center justify-center sm:justify-start gap-8 sm:gap-10 pt-1"
            >
              {[
                { value: '+30', label: 'Anos de Experiência' },
                { value: '+15.000', label: 'Clientes Satisfeitos' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="w-px h-10 bg-beige-darker" />}
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="cursor-default text-center sm:text-left"
                  >
                    <div className="text-gold font-serif font-bold text-2xl sm:text-3xl leading-none">
                      {item.value}
                    </div>
                    <div className="text-dark-muted/70 text-[0.72rem] tracking-wide mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
