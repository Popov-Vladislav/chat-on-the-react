import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DialogItem } from '../';
import './Dialogs.scss';

const Dialogs = ({ items }) => {
  return (
    <div className='dialogs'>
      {items.map(item=>{
        return <DialogItem
        user={{
          isOnline: true,
          fullname: 'Фёдор Достоевский',
          avatar:
            'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
        }}
        message={{
          text:
            'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
          created_at: new Date(),
        }}
        unreaded={1}
      />
      })}
    </div>
  );
};

Dialogs.propTypes = {};

export default Dialogs;
