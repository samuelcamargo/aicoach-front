import { Inter } from 'next/font/google'
import siteMetadata from '@/config/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.siteName,
    locale: siteMetadata.siteLocale,
    type: 'website',
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest'
      }
    ]
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={siteMetadata.siteLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 