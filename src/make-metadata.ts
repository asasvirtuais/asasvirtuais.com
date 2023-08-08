import type { Metadata } from 'next'

const rootMetadata : Metadata = {
  alternates: {
    canonical: 'https://asasvirtuais.com',
    languages: { 'en': 'https://asasvirtuais.com' },
  },
  formatDetection: {
    url: true,
    email: true,
    address: false,
    date: false,
    telephone: false,
  },
  icons: ['https://asasvirtuais.com/favicon.ico', 'https://asasvirtuais.com/icon.png'],
  keywords: ['programming', 'open-source', 'web'],
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
