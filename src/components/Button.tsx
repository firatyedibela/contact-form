import type React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled: boolean;
};

export const Button = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  console.log(disabled);
  return (
    <button
      type="submit"
      onClick={onClick}
      className={clsx(
        className,
        'relative px-10 py-4 bg-green-600 w-full hover:bg-dark-green text-white text-lg font-bold leading-[150%] rounded-lg cursor-pointer transition duration-150 flex justify-center items-center'
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
