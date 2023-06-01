import { useState } from 'react';
import clsx from 'clsx';

const InputCounterButton = ({ children, disabled, onClick, isLast }: InputCounterButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx('text-gray-600 hover:bg-slate-200 h-full w-20 cursor-pointer outline-none', {
        'rounded-r': isLast,
        'rounded-l': !isLast,
      })}
    >
      <span className="m-auto text-2xl font-thin">{children}</span>
    </button>
  );
};

export const InputCounter = ({
  className,
  disabled,
  defaultValue,
  onChange,
  label,
}: InputCounterProps) => {
  const [value, setValue] = useState(defaultValue || 1);

  const onChangeValue = (type: 'increase' | 'decrease') => {
    let newValue = value;

    if (type === 'increase') {
      newValue = newValue + 1;
    } else if (type === 'decrease') {
      newValue = newValue > 2 ? newValue - 1 : 1;
    }

    onChange(newValue);
    setValue(newValue);
  };

  return (
    <div className={clsx('h-10 w-32', className)}>
      {label && (
        <label
          htmlFor="custom-input-number"
          className="w-full text-gray-700 text-sm font-semibold"
        >
          {label}
        </label>
      )}

      <div className="relative flex h-10 w-full rounded-lg border-2 border-slate-300">
        <InputCounterButton
          onClick={() => onChangeValue('decrease')}
          disabled={disabled}
        >
          -
        </InputCounterButton>

        <input
          readOnly
          className="w-full flex items-center outline-none text-center text-gray-700 font-semibold"
          value={value}
        />

        <InputCounterButton
          onClick={() => onChangeValue('increase')}
          disabled={disabled}
          isLast
        >
          +
        </InputCounterButton>
      </div>
    </div>
  );
};

type InputCounterProps = {
  className?: string;
  disabled?: boolean;
  defaultValue: number;
  onChange: (quantity: number) => void;
  label?: string;
};

type InputCounterButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
  isLast?: boolean;
};