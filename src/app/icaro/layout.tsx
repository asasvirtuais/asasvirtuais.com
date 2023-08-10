import makeMetadata from '@/make-metadata'
import RootLayout from '../layout'

export const metadata = makeMetadata(
  'Ícaro Asas Virtuais',
  'A self-taught programmer and an open-source enthusiast'
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
