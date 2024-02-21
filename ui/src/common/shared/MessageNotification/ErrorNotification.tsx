import React from 'react';

interface ErrorNotificationProps {
  errors: string | undefined;
}

const ErrorNotification = ({ errors }: ErrorNotificationProps) => (
  <>{errors && <div className="input-field--errors">{errors}</div>}</>
);

export default ErrorNotification;
