import { Analytics } from '@vercel/analytics/react'
import makeMetadata from '@/make-metadata'
import RootLayout from '../layout'

export const metadata = makeMetadata(
  'Services - Asas Virtuais',
  'These services we do with guaranteed results'
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
