import type { Metadata } from 'next'

const rootMetadata : Metadata = {
  alternates: {
    canonical: 'https://asasvirtuais.com',
    languages: { 'en': 'https://asasvirtuais.com' },
  },
  authors: { name: 'Ícaro Asas Virtuais', url: 'https://icaro-capobianco.github.io' },
  colorScheme: 'light',
  creator: 'Ícaro Asas Virtuais',
  formatDetection: { email: true, address: false, date: false, telephone: false, url: true },
  icons: ['https://asasvirtuais.com/favicon.ico', 'https://asasvirtuais.com/icon.png'],
  keywords: ['software', 'software-house', 'web-development'],
  openGraph: {
    url: 'https://asasvirtuais.com',
    siteName: 'Asas Virtuais',
    type: 'website',
    images: 'https://asasvirtuais.com/cover.jpg',
  }
}

export default function makeMetadata(
  title: string,
  description: string,
  metadata: Metadata = {}
) : Metadata{
    return {
      ...rootMetadata,
      title,
      description,
      openGraph: {
        title,
        description,
        ...rootMetadata.openGraph
      },
      ...metadata,
    }
}
