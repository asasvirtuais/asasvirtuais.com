import { Metadata } from 'next'
import RootLayout from '../layout'

export const metadata: Metadata = {
    title: 'WP Script Workers',
    description: 'Boost your pages by running JavaScript in parallel'
}

const GoogleScripts = () => (
    <>
        {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BZC6W43NGX"
        strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BZC6W43NGX');
        `}
        </Script> */}
    </>
)

export default function PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <RootLayout>
            {children}
            <GoogleScripts/>
        </RootLayout>
    )
}
  
