import clsx from 'clsx';
import Link from 'next/link';

import LoadingSvg from 'vectors/loading.svg';

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'default',
  ...otherProps
}: ButtonProps | ButtonLinkProps) => {
  const classes = clsx(
    `flex items-center justify-center font-semibold transition-colors duration-700`,
    className,
    {
      'bg-primary-600 hover:bg-primary-500 text-white': variant === 'primary',
      'bg-secondary-400 hover:bg-secondary-300 text-white': variant === 'secondary',
      'bg-slate-400	cursor-not-allowed': 'disabled' in otherProps && otherProps?.disabled,
      'h-12 px-8 rounded text-base min-w-[200px]': size === 'default',
      'h-8 px-4 rounded-lg text-sm min-w-[100px]': size === 'small',
    },
  );

  if (type === 'link' && 'href' in otherProps && otherProps.href) {
    const href = otherProps.href;
    const isExternal = /^[a-zA-Z]+:\/\//.test(href);

    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? '_blank' : '_self'}
      >
        {children}
      </Link>
    );
  } else if (type !== 'link' && 'onClick' in otherProps && otherProps.onClick) {
    const { disabled, onClick, isLoading } = otherProps;

    return (
      <button
        className={`button-loader ${classes}`}
        {...{ disabled, onClick, type }}
      >
        {isLoading ? <LoadingSvg /> : children}
      </button>
    );
  }

  return null;
};

type ButtonBaseProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
};

type ButtonLinkProps = ButtonBaseProps & {
  href?: string;
  type: 'link';
};

type ButtonProps = ButtonBaseProps & {
  disabled?: boolean;
  onClick?: () => void;
  type: 'button' | 'submit';
  isLoading?: boolean;
};
