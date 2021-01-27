import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../modules';

import './Auth.scss';

export default function Auth() {
  return (
    <section className='auth'>
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route path='/registration' component={RegisterForm} />
    </section>
  );
}
