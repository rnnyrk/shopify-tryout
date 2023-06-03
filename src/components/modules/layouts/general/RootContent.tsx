import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { LanguageSelect } from './LanguageSelect';
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
      </body>
    </StoreWrapper>
  );
};

type RootContentProps = {
  children: React.ReactNode;
};
