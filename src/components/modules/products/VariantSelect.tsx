import * as i from 'types';
import clsx from 'clsx';

export const VariantSelect = ({ onChange, variants, selectedVariantId }: VariantSelectProps) => {
  return (
    <div className="w-full flex">
      {variants.map((variant) => {
        const isActive = selectedVariantId === variant.id;

        return (
          <button
            className={clsx(`border-cyan-700 border-2 py-2 px-4 mr-2 font-semibold`, {
              'text-white bg-cyan-600': isActive,
              'bg-slate-200': !isActive,
            })}
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
  variants: i.ClientVariant[];
  selectedVariantId: string;
};
