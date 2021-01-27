import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MessageIsChecked } from '../';

import './Message.scss';
import { Time } from '../../helpers';

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachements,
  isTyping,
}) => {
  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--istyping': isTyping,
        'message--image': attachements && attachements.length === 1,
      })}
    >
      <div className='message__avatar'>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className='message__content'>
        <div className='message__box'>
          {!isTyping && <MessageIsChecked isReaded={isReaded} isMe={isMe} />}
          <div className='message__info'>
            {(text || isTyping) && (
              <div className='message__bubble'>
                {text && <p className='message__text'>{text}</p>}
                {isTyping && (
                  <div className='typing-indicator'>
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
            )}
            <div
              className={classNames('message__attachements', {
                'message__attachements_no-margin': !text,
              })}
            >
              {attachements &&
                attachements.map((att) => (
                  <div className='message__attachements-item'>
                    <img src={att.url} alt={att.filename} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {date && (
          <span className='message__date'>
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  );
};
Message.defaultProps = {
  user: {},
};
Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.object,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  attachements: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
