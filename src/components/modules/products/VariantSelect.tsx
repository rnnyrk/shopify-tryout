import * as i from 'types';
import clsx from 'clsx';

export const VariantSelect = ({ onChange, variants, selectedVariantId }: VariantSelectProps) => {
  return (
    <div className="w-full flex flex-wrap">
      {variants.map((variant) => {
        const isActive = selectedVariantId === variant.id;

        return (
          <button
            className={clsx(
              `w-full py-2 px-4 mb-2 lg:w-auto lg:mr-2 lg:my-2 font-semibold rounded-md`,
              {
                'text-white bg-primary-600': isActive,
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
  variants: i.ClientVariant[];
  selectedVariantId: string;
};
