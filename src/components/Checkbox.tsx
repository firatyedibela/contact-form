import iconCheckboxChecked from '../assets/images/icon-checkbox-check.svg';
import { Asteriks } from './Asteriks';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { InputError } from './InputError';
import getErrorMessage from '../utils/get-error-message';
import { AnimatePresence } from 'motion/react';

type CheckboxProps = {
  label: string;
  name: string;
  validation: {};
  required: boolean;
  className?: string;
};

type CheckboxIconProps = {
  isChecked: boolean;
};

export const Checkbox = ({
  label,
  name,
  validation,
  required,
  className,
}: CheckboxProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const errorMsg = getErrorMessage(errors, name);
  const value = watch(name);
  return (
    <div className={clsx(className, 'flex flex-col gap-2')}>
      <label className="flex items-center justify-start cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none"
          {...register(name, validation)}
        />
        <CheckboxIcon isChecked={value} />
        <p className="leading-[150%] text-grey-900 mr-4">
          {label} {required && <Asteriks />}
        </p>
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {errorMsg && <InputError message={errorMsg} />}
      </AnimatePresence>
    </div>
  );
};

const CheckboxIcon = ({ isChecked }: CheckboxIconProps) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center mr-4">
      {isChecked ? (
        <img src={iconCheckboxChecked}></img>
      ) : (
        <div className="w-[18px] h-[18px] border-[2px] border-grey-500 rounded-xs"></div>
      )}
    </div>
  );
};
