import * as i from 'types';
import { MiniCart } from 'modules/cart/MiniCart';

import { LanguageSelect } from './LanguageSelect';
import { MainMenu } from './MainMenu';

export const Navigation = ({ locale }: NavigationProps) => {
  return (
    <nav className="w-full flex justify-center p-8 mb-10">
      <MainMenu />
      <div className="flex items-center">
        {/* @ts-expect-error Server Component */}
        <LanguageSelect
          className="mr-6"
          locale={locale}
        />
        <MiniCart />
      </div>
    </nav>
  );
};

type NavigationProps = {
  locale: i.Locale;
};
