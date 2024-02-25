import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from '../Icon/Icon';
import './ToolTip.scss';

export const InformationToolTip = ({ desc }: { desc: string }) => {
  return (
    <>
      <div className="tooltip">
        <li data-tip>
          <Icon iconName="icon-information" />
        </li>
        <ReactTooltip>
          <p>{desc}</p>
        </ReactTooltip>
      </div>
    </>
  );
};
