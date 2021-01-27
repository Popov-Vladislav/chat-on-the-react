import React from 'react';
import { InfoCircleTwoTone } from '@ant-design/icons';

import { Block } from '../../../components';
import FormWithFormik from './FormWithFormik.js';

const RegisterForm = (props) => {
  const success = false;

  return (
    <div className='auth__content'>
      <div className='auth__top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <FormWithFormik />
        ) : (
          <div className='auth__success-block'>
            <InfoCircleTwoTone style={{ fontSize: 55 }} />
            <h3>Подтвердите свой аккаунт</h3>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
