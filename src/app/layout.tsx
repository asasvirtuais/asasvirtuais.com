import { Metadata } from 'next'
import { comfortaa } from '@/font'
import { Analytics } from '@vercel/analytics/react'
import { title, description } from './(wording)'
import makeMetadata from '@/make-metadata'
import bg from '../../public/background.svg'
import Script from 'next/script'
import GTagIFrame from './(gtag-iframe)'
import { Partytown } from '@builder.io/partytown/react'

export const metadata : Metadata = makeMetadata(
  title, description
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Partytown debug={true} forward={['dataLayer.push']} />
        <Script type='text/partytown' src='https://www.googletagmanager.com/gtag/js?id=G-ZG4MXN61CQ' />
        <Script type='text/partytown' id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZG4MXN61CQ');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <link rel="preload" href="/background.svg" as="image" type="image/svg+xml"/>
      <body style={{
        backgroundColor: '#ffffff',
        backgroundImage: `url(${bg.src})`
      }} className={comfortaa.className}>
          <GTagIFrame/>
          {children}
          <Analytics/>
      </body>
    </html>
  )
}
