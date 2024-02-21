import React from 'react';
import { ContainerProps } from '../../interfaces/ContainerProps';

export const DefaultPageContainer = ({
  children,
  defaultPageTitle,
}: ContainerProps) => (
  <>
    <div className="defaultpage">
      <div className="container">
        {defaultPageTitle && (
          <h2 className="defaultpage__title">{defaultPageTitle}</h2>
        )}
        <div className="defaultpage__inner">{children}</div>
      </div>
    </div>
  </>
);
