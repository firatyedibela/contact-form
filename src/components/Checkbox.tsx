import iconCheckboxChecked from '../assets/images/icon-checkbox-check.svg';
import { Asteriks } from './Asteriks';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { InputError } from './InputError';
import getErrorMessage from '../utils/get-error-message';
import { AnimatePresence } from 'motion/react';
import type { RegisterOptions } from 'react-hook-form';

type CheckboxProps = {
  label: string;
  name: string;
  validationRules: RegisterOptions;
  className?: string;
};

type CheckboxIconProps = {
  isChecked: boolean;
};

export const Checkbox = ({
  label,
  name,
  validationRules,
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
          className="appearance-none"
          type="checkbox"
          aria-describedby="input-error-checkbox"
          required={!!validationRules.required}
          {...register(name, validationRules)}
        />
        <CheckboxIcon isChecked={value} />
        <p className="leading-[150%] text-grey-900 mr-4">
          {label} {validationRules.required && <Asteriks />}
        </p>
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {errorMsg && (
          <InputError id="input-error-checkbox" message={errorMsg} />
        )}
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
