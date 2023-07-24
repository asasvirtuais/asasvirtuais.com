import { Analytics } from '@vercel/analytics/react'
import makeMetadata from '@/make-metadata'
import RootLayout from '../layout'

export const metadata = makeMetadata(
  'Projects - Asas Virtuais',
  'Current projects we are proud to publish'
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
