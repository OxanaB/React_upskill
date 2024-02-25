import Slider from 'rc-slider';
import React, { FC } from 'react';
import InputField from '../../../shared/Input/InputField';
import { Button } from '../../../shared/Button/Button';

interface CompanyStaffFilterProps {
  FilterStaff: ({ children }: { children: React.ReactNode }) => JSX.Element;
  handleApplyClick: () => void;
  handleStaffChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  leftStaff: {
    value: number;
    setLeftStaff: React.Dispatch<React.SetStateAction<number>>;
  };
  rightStaff: {
    value: number;
    setRightStaff: React.Dispatch<React.SetStateAction<number>>;
  };
}

export const CompanyStaffFilter: FC<CompanyStaffFilterProps> = ({
  FilterStaff,
  handleApplyClick,
  handleStaffChange,
  leftStaff,
  rightStaff,
}) => {
  const { Range } = Slider;
  return (
    <>
      <FilterStaff>
        <div className="filter__item-content--salary">
          <InputField
            type="number"
            value={leftStaff.value}
            onChange={e => handleStaffChange(e, 0)}
          />
          -
          <InputField
            type="number"
            value={rightStaff.value}
            onChange={e => handleStaffChange(e, 1)}
          />
        </div>
        <Range
          max={1000}
          min={0}
          allowCross={false}
          value={[leftStaff.value, rightStaff.value]}
          onChange={value => {
            leftStaff.setLeftStaff(value[0]);
            rightStaff.setRightStaff(value[1]);
          }}
        />
      </FilterStaff>
      <div className="userpage__leftblock-buttons">
        <Button onClick={handleApplyClick} btnTheme="btn-small">
          Apply
        </Button>
      </div>
    </>
  );
};
