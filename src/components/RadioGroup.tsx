import { useFormContext } from 'react-hook-form';
import { InputError } from './InputError';
import iconRadioSelected from '../assets/images/icon-radio-selected.svg';
import getErrorMessage from '../utils/get-error-message';
import { Asteriks } from './Asteriks';
import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';
import type { RegisterOptions } from 'react-hook-form';

type RadioGroupProps = {
  legend: string;
  className?: string;
  name: string;
  options: string[];
  validationRules: RegisterOptions;
  required?: boolean;
};

type RadioIconProps = {
  isSelected: boolean;
};

export const RadioGroup = ({
  legend,
  className,
  name,
  options,
  validationRules,
}: RadioGroupProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const errorMsg = getErrorMessage(errors, name);
  const selectedValue = watch(name);

  return (
    <fieldset className={clsx(className)}>
      <legend className="leading-[150%] flex flex-row capitalize mb-4">
        {legend} {validationRules.required && <Asteriks className="ml-2" />}
      </legend>

      <div className="flex flex-col gap-4 md:flex-row">
        {options.map((option) => (
          <div className="flex-1" key={option}>
            <label className="radio-label flex flex-row items-center justify-start px-6 py-[11px] m text-lg border-1 border-grey-500 rounded-lg leading-[150%] capitalize cursor-pointer hover:border-green-600 transition-all duration-300">
              <input
                className="appearance-none peer"
                type="radio"
                value={option}
                {...register(name, validationRules)}
              />
              <RadioIcon isSelected={option === selectedValue} />
              {option}
            </label>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {errorMsg && <InputError key={errorMsg} message={errorMsg} />}
      </AnimatePresence>
    </fieldset>
  );
};

const RadioIcon = ({ isSelected }: RadioIconProps) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center mr-3">
      {isSelected ? (
        <img src={iconRadioSelected}></img>
      ) : (
        <div className="w-[19.5px] h-[19.5px] border-[1.5px] border-grey-500 rounded-full"></div>
      )}
    </div>
  );
};
