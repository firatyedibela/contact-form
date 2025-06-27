import { Asteriks } from './Asteriks';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'motion/react';
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

  const isInputInvalid = !!errors[name];
  const error = errors[name];
  const errorMessage =
    error && typeof error.message === 'string' ? error.message : undefined;

  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      <label className="capitalize" htmlFor={id}>
        {label}
        {required && <Asteriks className="ml-2" />}
      </label>
      <div>
        <input
          className="border border-grey-500 rounded-lg px-6 py-[11px] leading-[150%] text-lg w-full"
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(name)}
        />
        <AnimatePresence mode="wait" initial={false}>
          {isInputInvalid && (
            <InputError key={errorMessage} message={errorMessage} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

type InputErrorProps = {
  message: string | undefined;
};

const InputError = ({ message }: InputErrorProps) => {
  return (
    <motion.p {...inputError_animation} className="text-red-500">
      {message}
    </motion.p>
  );
};

const inputError_animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
