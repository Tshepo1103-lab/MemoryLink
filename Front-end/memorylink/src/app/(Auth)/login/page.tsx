'use client'

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useStyles } from './style/style';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  const { styles } = useStyles();

  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', height: '100vh' }}>
      <div style={{ backgroundColor: '#003366' }}> 
      </div> 
      <div style={{ backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img
              src="/assets/images/Logo.png"
              alt="logo"
              style={{ width: "500px" }}
              className={styles.middle}
            />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.form}
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" className={styles.input} />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" className={styles.input} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Login
            </Button>
          </Form.Item>
          <div>
            <a href="/register" className={styles.text}>
              Create Account
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
