import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="px-10 py-4 bg-green-600 hover:bg-dark-green text-white text-lg font-bold leading-[150%] rounded-lg cursor-pointer transition duration-150">
      {children}
    </button>
  );
};
