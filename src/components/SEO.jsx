import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/config/metadata'

export default function SEO({ title, description, ogType, ogImage, canonicalUrl, children }) {
  const router = useRouter()
  
  // Valores padrão caso não sejam fornecidos
  const meta = {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    ogImage: ogImage || siteMetadata.socialBanner,
    canonicalUrl: canonicalUrl || `${siteMetadata.siteUrl}${router.asPath}`,
    type: ogType || 'website',
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={siteMetadata.keywords.join(', ')} />
      <meta property="og:url" content={meta.canonicalUrl} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />
      <link rel="canonical" href={meta.canonicalUrl} />
      <meta name="language" content={siteMetadata.language} />
      <meta name="author" content={siteMetadata.author} />
      {children}
    </Head>
  )
} 