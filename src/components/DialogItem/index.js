import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time } from '../../helpers';
import { MessageIsChecked } from '../';

import './DialogItem.scss';

const DialogItem = ({ user, message, unreaded }) => {
  const getAvatar = (avatar) => {
    if (avatar) {
      return <img src={avatar} alt='' />;
    } else {
      return null;
    }
  };
  return (
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': user.isOnline,
      })}
    >
      <div className='dialogs__item-avatar'>{getAvatar(user.avatar)}</div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <div className='dialogs__item-fullname'>{user.fullname}</div>
          <div className='dialogs__item-date'>
            {/* <Time date={message.created_at} /> */}
            13:10
          </div>
        </div>
        <div className='dialogs__item-info-bottom'>
          <div className='dialogs__item-text'>{message.text}</div>
          <div className='dialogs__item-notification'>
            {message.isMe ? (
              <MessageIsChecked isReaded={message.isReaded} />
            ) : (
              unreaded > 0 && (
                <div className='dialogs__item-notification-counter'>
                  {unreaded > 9 ? '+9' : unreaded}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DialogItem.propTypes = {
  user: PropTypes.object,
  message: PropTypes.object,
  unreaded: PropTypes.number,
};

export default DialogItem;
