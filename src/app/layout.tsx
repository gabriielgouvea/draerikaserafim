import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Erika Serafim | Biomédica Esteta — Rejuvenescimento Facial em Alphaville e Osasco',
  description:
    'Especialista em rejuvenescimento facial avançado e harmonização estética com mais de 30 anos de experiência. Atendimento premium em Alphaville e Osasco (SP). Agende sua avaliação.',
  keywords: [
    'rejuvenescimento facial',
    'biomédica esteta',
    'harmonização facial',
    'laser CO2',
    'preenchimento facial',
    'bioestimuladores de colágeno',
    'toxina botulínica',
    'estética avançada Alphaville',
    'estética avançada Osasco',
    'Dra. Erika Serafim',
    'peeling regenerativo',
  ],
  authors: [{ name: 'Dra. Erika Serafim' }],
  creator: 'Dra. Erika Serafim',
  openGraph: {
    title: 'Dra. Erika Serafim | Rejuvenescimento Facial Avançado',
    description:
      'Mais de 30 anos transformando peles com naturalidade, sofisticação e tecnologia de ponta. Atendimento premium em Alphaville e Osasco.',
    url: 'https://www.draerikarserafim.com.br',
    siteName: 'Dra. Erika Serafim',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Erika Serafim — Biomédica Esteta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Erika Serafim | Rejuvenescimento Facial Avançado',
    description: 'Mais de 30 anos transformando peles com naturalidade e sofisticação.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C9A84C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Meta Pixel — quando tiver o ID, descomente e substitua SEU_PIXEL_ID */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        */}

        {/* Google Analytics — quando tiver o ID, descomente e substitua G-XXXXXXXXXX */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());gtag('config','G-XXXXXXXXXX');
        `}} />
        */}

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Dra. Erika Serafim — Biomédica Esteta',
              description:
                'Especialista em rejuvenescimento facial avançado e harmonização estética com mais de 30 anos de experiência.',
              url: 'https://www.draerikarserafim.com.br',
              telephone: '+55-83-98891-5177',
              email: 'erikaserafim80@gmail.com',
              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Alphaville',
                  addressRegion: 'SP',
                  addressCountry: 'BR',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Osasco',
                  addressRegion: 'SP',
                  addressCountry: 'BR',
                },
              ],
              priceRange: '$$$',
              medicalSpecialty: 'Aesthetic Medicine',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
