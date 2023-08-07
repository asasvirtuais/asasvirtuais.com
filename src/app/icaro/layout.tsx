import { Analytics } from '@vercel/analytics/react'
import makeMetadata from '@/make-metadata'
import RootLayout from '../layout'

export const metadata = makeMetadata(
  'Ícaro Asas Virtuais',
  'Developer, Designer, Dreamer'
)

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}
