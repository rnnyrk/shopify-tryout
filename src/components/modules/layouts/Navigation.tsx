import * as i from 'types';
import { CartSheet } from 'modules/cart/CartSheet';

import { LanguageSelect } from './LanguageSelect';
import { MainMenu } from './MainMenu';

export const Navigation = ({ locale }: NavigationProps) => {
  return (
    <nav className="absolute top-0 left-0 w-full h-20 px-8 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <a
          href="/"
          className="mr-8 uppercase text-xl font-bold tracking-widest"
        >
          True Tallow
        </a>
        <MainMenu />
      </div>
      <div className="flex items-center">
        {/* @ts-expect-error Server Component */}
        <LanguageSelect
          className="mr-6"
          locale={locale}
        />
        <CartSheet />
      </div>
    </nav>
  );
};

type NavigationProps = {
  locale: i.Locale;
};
