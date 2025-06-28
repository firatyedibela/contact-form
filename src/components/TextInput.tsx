import { Asteriks } from './Asteriks';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'motion/react';
import { InputError } from './InputError';
import getErrorMessage from '../utils/get-error-message';
import clsx from 'clsx';

type TextInputProps = {
  type?: 'text' | 'email' | 'password';
  multiline?: boolean;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export const TextInput = ({
  type,
  multiline,
  label,
  name,
  id,
  placeholder,
  required,
  className,
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const tailwindInputStyling: string =
    'border border-grey-500 rounded-lg px-6 py-[11px] leading-[150%] text-lg w-full';

  const errorMsg = getErrorMessage(errors, name);

  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      <label className="capitalize" htmlFor={id}>
        {label}
        {required && <Asteriks className="ml-2" />}
      </label>
      <div>
        {multiline ? (
          <textarea
            id={id}
            className={clsx(tailwindInputStyling, 'h-60 sm:h-33 lg:h-[105px]')}
            {...register(name)}
          ></textarea>
        ) : (
          <input
            className={clsx(tailwindInputStyling)}
            type={type}
            id={id}
            placeholder={placeholder}
            {...register(name)}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {errorMsg && <InputError key={errorMsg} message={errorMsg} />}
        </AnimatePresence>
      </div>
    </div>
  );
};
