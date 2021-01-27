import React, { Component } from 'react';

import { Block } from '../../../components';
import LoginFormWithFormik from './LoginFormWithFormik';

export default class LoginForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div className='auth__content'>
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <LoginFormWithFormik />
        </Block>
      </div>
    );
  }
}
