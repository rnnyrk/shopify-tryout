import { Toaster } from 'common/interaction/Toaster';

import { Footer } from './Footer';
import { LanguageSelect } from './LanguageSelect';
import { Navigation } from './Navigation';
import { StoreWrapper } from './StoreWrapper';

export const RootContent = ({ children }: RootContentProps) => {
  return (
    <StoreWrapper>
      <body className="min-h-full min-w-full">
        <Navigation>
          <LanguageSelect className="lg:mr-6" />
        </Navigation>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </StoreWrapper>
  );
};

type RootContentProps = {
  children: React.ReactNode;
};
