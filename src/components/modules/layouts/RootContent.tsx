import { Hero } from './Hero';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { RootLayout } from './RootLayout';
import { LanguageSelect } from './LanguageSelect';

export const RootContent = ({ children }: RootContentProps) => {
  return (
    <RootLayout>
      <body className="min-h-full min-w-full">
        <Navigation>
          <LanguageSelect className="lg:mr-6" />
        </Navigation>
        <Hero />
        <main>{children}</main>
        <Footer />
      </body>
    </RootLayout>
  );
};

type RootContentProps = {
  children: React.ReactNode;
};
