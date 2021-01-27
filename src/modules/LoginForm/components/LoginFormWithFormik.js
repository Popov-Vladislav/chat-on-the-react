import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../../components';

export default function LoginFormWithFormik() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Не правильный email')
      .required('Email обязателен'),
    password: Yup.string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен быть длиннее 6 символов'),
  });

  const validate = (errors, touched) => {
    console.log(errors, touched);
    if (errors && touched) {
      return 'error';
    } else if (!touched) {
      return '';
    } else {
      return 'success';
    }
  };
  
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
        isValid,
        dirty,
      }) => (
        <Form name='normal_login' className='login-form'>
          <Form.Item
            name='email'
            validateStatus={validate(errors.email, touched.email)}
            help={!touched.email ? null : errors.email}
            hasFeedback
          >
            <Input
              id='email'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='E-mail'
              size='large'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name='password'
            validateStatus={validate(errors.password, touched.password)}
            help={!touched.password ? null : errors.password}
            hasFeedback
          >
            <Input.Password
              id='password'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              size='large'
              placeholder='Пароль'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              size='large'
              onClick={handleSubmit}
            >
              Войти в аккаунт
            </Button>
            <Link className='auth__register-link' to='/registration'>
              Зарегистрироваться
            </Link>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}
