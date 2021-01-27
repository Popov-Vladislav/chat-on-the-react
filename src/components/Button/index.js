import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import './Button.scss';

const Button = (props) => {
  const classNameButton = classNames('button', props.className, {
    'button--large': props.size === 'large',
  });

  return <BaseButton {...props} className={classNameButton} />;
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
