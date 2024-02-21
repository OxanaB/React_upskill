import React from 'react';
import InputCheckbox from '../../shared/Input/InputCheckBox';
import InputField from '../../shared/Input/InputField';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Button } from '../../shared/Button/Button';

interface UserFilterProps {
  position: {
    value: {
      position: string;
    }[];
    newPosition: (pos: string) => () => void;
    isChanged: (data: string) => boolean;
  };
  minSalary: {
    value: number;
    setMinSalary: React.Dispatch<React.SetStateAction<number>>;
  };
  maxSalary: {
    value: number;
    setMaxSalary: React.Dispatch<React.SetStateAction<number>>;
  };
  handleApplyClick: () => void;
  handleSalaryChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  FilterPosition: ({ children }: { children: React.ReactNode }) => JSX.Element;
  FilterSalary: ({ children }: { children: React.ReactNode }) => JSX.Element;
  isVisible?: boolean;
}

const UserFilter = ({
  position,
  minSalary,
  maxSalary,
  handleApplyClick,
  handleSalaryChange,
  FilterPosition,
  FilterSalary,
}: UserFilterProps) => {
  const { Range } = Slider;
  return (
    <>
      <FilterPosition>
        <InputCheckbox
          onClick={position.newPosition('Developer')}
          checked={position.isChanged('Developer')}
          name="Developer"
          label="Developer"
        />
        <InputCheckbox
          onClick={position.newPosition('Engineer')}
          checked={position.isChanged('Engineer')}
          name="Engineer"
          label="Engineer"
        />
        <InputCheckbox
          onClick={position.newPosition('Writer')}
          checked={position.isChanged('Writer')}
          name="Writer"
          label="Writer"
        />
        <InputCheckbox
          onClick={position.newPosition('Designer')}
          checked={position.isChanged('Designer')}
          name="Designer"
          label="Designer"
        />
        <InputCheckbox
          onClick={position.newPosition('Business Analyst')}
          checked={position.isChanged('Business Analyst')}
          name="Business Analyst"
          label="Business Analyst"
        />
      </FilterPosition>
      <FilterSalary>
        <div className="filter__item-content--salary">
          <InputField
            type="number"
            value={minSalary.value}
            onChange={e => handleSalaryChange(e, 0)}
          />
          -
          <InputField
            type="number"
            value={maxSalary.value}
            onChange={e => handleSalaryChange(e, 1)}
          />
        </div>
        <Range
          max={1000}
          min={0}
          allowCross={false}
          value={[minSalary.value, maxSalary.value]}
          onChange={value => {
            minSalary.setMinSalary(value[0]);
            maxSalary.setMaxSalary(value[1]);
          }}
        />
      </FilterSalary>
      <div className="userpage__leftblock-buttons">
        <Button onClick={handleApplyClick} btnTheme="btn-small">
          Apply
        </Button>
      </div>
    </>
  );
};

export default UserFilter;
