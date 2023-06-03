import { Container } from 'common/layout/Container';

export const metadata = {
  title: {
    default: 'Custom Shopify Storefront',
    template: '%s | Custom Storefront',
  },
  description: 'Displaying Shopify products in a headless NextJS',
  openGraph: {
    title: 'Custom Storefront',
    description: 'Displaying Shopify products in a headless NextJS',
    url: 'https://custom-storefront.nl',
    siteName: 'Custom Storefront',
    images: [
      {
        url: 'https://custom-storefront.nl/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Custom Storefront',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/images/favicon/favicon.ico',
  },
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <Container noPadding>
      <article className="w-full min-h-[75vh] flex flex-wrap rounded-lg overflow-hidden bg-background-main lg:justify-between">
        {children}
      </article>
    </Container>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
