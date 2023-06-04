import './global.css';
import * as i from 'types';
import { AbstractIntlMessages, useLocale, NextIntlClientProvider } from 'next-intl';
import { Nunito_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';

import { cn } from 'services';
import { RootContent } from 'modules/layouts/RootContent';

const nunito = Nunito_Sans({ subsets: ['latin'] });

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

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  let translations: AbstractIntlMessages;
  try {
    translations = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    // Show a 404 error if the user requests an unknown locale
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn('text-black bg-background-main', nunito.className)}
    >
      <head />
      <NextIntlClientProvider
        locale={locale}
        messages={translations}
      >
        <RootContent>{children}</RootContent>
      </NextIntlClientProvider>
    </html>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: {
    locale: i.Locale;
  };
};

export default RootLayout;
