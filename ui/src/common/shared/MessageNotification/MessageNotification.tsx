import React from 'react';
import classNames from 'classnames';

import './MessageNotification.scss';

interface MessageNotificationProps {
  error?: string;
  success?: string;
}

export const MessageNotification = ({
  error,
  success,
}: MessageNotificationProps) => {
  return (
    <div
      className={classNames(
        'message',
        error ? 'message-error' : 'message-success',
      )}
    >
      {error || success}
    </div>
  );
};
