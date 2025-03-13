/**
 * Configuração de metadados e SEO para o projeto aiCoach
 */

interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  siteName: string;
  siteLocale: string;
  language: string;
  logoUrl: string;
  socialBanner: string;
  email: string;
  github: string;
  linkedin: string;
  author: string;
  analytics: {
    googleAnalyticsId: string;
  };
  keywords: string[];
}

const siteMetadata: SiteMetadata = {
  title: 'aiCoach',
  description: 'Sistema de inteligência artificial para criação e acompanhamento personalizado de cronogramas de estudos, potencializando seu aprendizado com eficiência e produtividade',
  siteUrl: 'http://aicoach.com.br',
  siteName: 'aiCoach',
  siteLocale: 'pt-BR',
  language: 'Portuguese',
  logoUrl: '/images/logo.png',
  socialBanner: '/images/social-banner.png',
  email: 'contato@aicoach.com.br',
  github: 'https://github.com/samuelcamargo',
  linkedin: 'https://www.linkedin.com/in/samuel-camargo',
  author: 'Samuel Henrique de Alcantara Camargo',
  analytics: {
    // Google Analytics ou qualquer outro ID de analítica
    googleAnalyticsId: '',
  },
  keywords: [
    'aicoach',
    'inteligência artificial',
    'cronograma de estudos',
    'educação online',
    'produtividade acadêmica',
    'plano de estudos',
    'mentoria educacional',
    'IA para estudantes',
    'aprendizado personalizado'
  ],
}

export default siteMetadata; 