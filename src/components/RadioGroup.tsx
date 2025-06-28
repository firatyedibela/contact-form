import { useFormContext } from 'react-hook-form';
import { InputError } from './InputError';
import iconRadioSelected from '../assets/images/icon-radio-selected.svg';
import getErrorMessage from '../utils/get-error-message';
import { Asteriks } from './Asteriks';
import clsx from 'clsx';

type RadioGroupProps = {
  legend: string;
  className?: string;
  name: string;
  options: string[];
  validation: {};
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
  validation,
  required,
}: RadioGroupProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMsg = getErrorMessage(errors, name);

  return (
    <fieldset className={clsx(className, 'flex flex-col gap-4')}>
      <div>
        <legend className="leading-[150%] flex flex-row capitalize">
          {legend} {required && <Asteriks className="ml-2" />}
        </legend>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        {options.map((option) => (
          <div className="flex-1">
            <label className="flex flex-row items-center justify-start px-6 py-3 m text-lg border-1 border-grey-500 rounded-lg leading-[150%] capitalize">
              <input
                className="appearance-none"
                type="radio"
                value={option}
                required
                {...register(name, validation)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      {errorMsg && <InputError message={errorMsg} />}
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
