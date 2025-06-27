import { useState } from 'react';
import iconRadioSelected from '../assets/images/icon-radio-selected.svg';
import { Asteriks } from './Asteriks';

type RadioGroupProps = {
  legend: string;
  className?: string;
  name: string;
  options: string[];
  required?: boolean;
};

type RadioIconProps = {
  isSelected: boolean;
};

export const RadioGroup = ({
  legend,
  className = '',
  name,
  options,
  required,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <fieldset className={`${className}`}>
      <legend className="mb-4 leading-[150%] flex flex-row">
        {legend} {required && <Asteriks className="ml-2" />}
      </legend>

      {options.map((option) => (
        <div>
          <label className="flex flex-row items-center justify-start px-6 py-3 m text-lg border-1 border-grey-500 rounded-lg leading-[150%] ">
            <input
              className="appearance-none"
              type="radio"
              name={name}
              value={option}
              checked={option === selected}
              onChange={() => setSelected(option)}
              required
            />
            <RadioIcon isSelected={option === selected} />
            {option}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

const RadioIcon = ({ isSelected }: RadioIconProps) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center mr-3">
      {isSelected ? (
        <img src={iconRadioSelected}></img>
      ) : (
        <div className="w-[19.5px] h-[19.5px] border-[2px] border-grey-500 rounded-full"></div>
      )}
    </div>
  );
};
