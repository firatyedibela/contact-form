import React, { useState } from 'react';
import iconCheckboxChecked from '../assets/images/icon-checkbox-check.svg';
import { Asteriks } from './Asteriks';

type CheckboxProps = {
  label: string;
  name: string;
  required: boolean;
};

type CheckboxIconProps = {
  isChecked: boolean;
};

export const Checkbox = ({ label, name, required }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label className="flex items-center justify-start cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          className="appearance-none"
          onChange={handleChange}
        />
        <CheckboxIcon isChecked={isChecked} />
        <p className="leading-[150%] text-grey-900 mr-4">
          {label} {required && <Asteriks />}
        </p>
      </label>
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
