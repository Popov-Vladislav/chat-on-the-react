import React from 'react';
import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, className }) => {
  const classNameButton = classNames('block', className);

  return <div className={classNameButton}>{children}</div>;
};

export default Block;
