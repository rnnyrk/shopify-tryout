import * as i from 'types';

import { cn } from 'services';

export const VariantSelect = ({ onChange, variants, selectedVariantId }: VariantSelectProps) => {
  return (
    <div className="w-full flex flex-wrap">
      {variants.map((variant) => {
        const isActive = selectedVariantId === variant.id;

        return (
          <button
            key={variant.id}
            className={cn(
              'w-full py-2 px-4 mb-2 lg:w-auto lg:mr-2 lg:my-2 font-semibold rounded-md',
              {
                'text-white bg-primary-400': isActive,
                'bg-slate-200': !isActive,
              },
            )}
            onClick={() => onChange(variant.id)}
          >
            {variant.title}
          </button>
        );
      })}
    </div>
  );
};

type VariantSelectProps = {
  onChange: (variantId: string) => void;
  variants: i.Variant[];
  selectedVariantId: string;
};
