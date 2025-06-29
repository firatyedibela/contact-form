import { Asteriks } from './Asteriks';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'motion/react';
import { InputError } from './InputError';
import getErrorMessage from '../utils/get-error-message';
import clsx from 'clsx';
import type { RegisterOptions } from 'react-hook-form';

type TextInputProps = {
  type?: 'text' | 'email' | 'password';
  multiline?: boolean;
  label: string;
  name: string;
  id: string;
  validationRules: RegisterOptions;
  placeholder?: string;
  className?: string;
};

export const TextInput = ({
  type,
  multiline,
  label,
  name,
  id,
  validationRules,
  placeholder,
  className,
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  let tailwindInputStyling: string =
    'border border-grey-500 rounded-lg px-6 py-[11px] leading-[150%] text-lg w-full cursor-pointer outline-none focus:border-green-600 hover:border-green-600 transition-all duration-150 ';

  const errorMsg = getErrorMessage(errors, name);
  if (errorMsg) tailwindInputStyling += 'border-red';

  return (
    <div
      className={clsx(
        'flex flex-col gap-2 max-h-[272px] md:max-h-[164px] lg:max-h-[137px]',
        className
      )}
    >
      <label className="capitalize" htmlFor={id}>
        {label}
        {validationRules.required && <Asteriks className="ml-2" />}
      </label>
      <div className="flex flex-col gap-2">
        {multiline ? (
          <textarea
            id={id}
            className={clsx(tailwindInputStyling, ' h-60 sm:h-33 lg:h-[105px]')}
            {...register(name, validationRules)}
          ></textarea>
        ) : (
          <input
            className={clsx(tailwindInputStyling)}
            type={type}
            id={id}
            placeholder={placeholder}
            {...register(name, validationRules)}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {errorMsg && <InputError key={errorMsg} message={errorMsg} />}
        </AnimatePresence>
      </div>
    </div>
  );
};
