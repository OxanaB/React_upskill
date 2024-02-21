import React from 'react';

import './SwitchBox.scss';

export interface SwitchBoxProps {
  isToggled: boolean;
  setIsToggled: (value: React.SetStateAction<boolean>) => void;
  switch: { before: string; after: string };
}

export const SwitchBox = ({
  isToggled,
  setIsToggled,
  switch: { before, after },
}: SwitchBoxProps) => {
  const onToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="switch-wrapper">
        <label className="switch-wrapper__toggle">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch-wrapper__toggle--circle" />
        </label>
        <span className="switch-wrapper__title">
          {isToggled ? after : before}
        </span>
      </div>
    </>
  );
};
