import React from 'react';
import PropTypes from 'prop-types';

import { Check, NoCheck } from '../../assets/svg';

export default function MessageIsChecked({ isMe, isReaded }) {
  const IsChecked = () => {
    if (isMe) {
      return null;
    } else {
      if (isReaded) {
        return <img src={Check} alt='check' className='message__check' />;
      }
    }
    return <img src={NoCheck} alt='check' className='message__check' />;
  };
  return <IsChecked />;
}

MessageIsChecked.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};
