import { Analytics } from '@vercel/analytics/react'
import RootLayout from '@/app/layout'
import makeMetadata from '@/make-metadata'

export const metadata = makeMetadata(
  'Asas Virtuais - Stepping Stones',
  'The first steps to create this initiative, Asas Virtuais',
)

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
      <Analytics/>
    </RootLayout>
  )
}
