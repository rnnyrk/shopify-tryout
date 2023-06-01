import * as i from 'types';
import { CartSheet } from 'modules/cart/CartSheet';

import { LanguageSelect } from './LanguageSelect';
import { MainMenu } from './MainMenu';

export const Navigation = ({ locale }: NavigationProps) => {
  // @TODO lock
  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-white">
      <a
        href="/"
        className="mr-8 uppercase text-xl font-bold tracking-widest"
      >
        Mellow Tallow
      </a>
      <MainMenu />
      <div className="flex items-center">
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
