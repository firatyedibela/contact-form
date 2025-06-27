import type React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'px-10 py-4 bg-green-600 hover:bg-dark-green text-white text-lg font-bold leading-[150%] rounded-lg cursor-pointer transition duration-150'
      )}
    >
      {children}
    </button>
  );
};
