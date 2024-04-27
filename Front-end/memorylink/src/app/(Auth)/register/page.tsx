"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { useStyles } from "./style/style";
import { useUserActions } from "../../../../providers/AuthProvider";

const { Option } = Select;

type FieldType = {
  name: string,
  surname: string,
  userName: string,
  emailAddress: string,
  roleNames?: string[],
  password?:string,
  isActive?:Boolean

};



const Register = () => {
  const { styles } = useStyles();
  const {register} =useUserActions();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values); 
    const updatedValues={
      ...values,isActive:true,roleNames:['User']
    }
    if(register)
      register(updatedValues)
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "1fr 1fr", height: "100vh" }}
    >
      <div style={{ backgroundColor: "#003366" }}></div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/Logo.png"
          alt="logo"
          style={{ width: "400px" }}
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
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" className={styles.input} />
          </Form.Item>
          <Form.Item<FieldType>
            name="surname"
            rules={[{ required: true, message: "Please input your surname!" }]}
          >
            <Input placeholder="Surname" className={styles.input} />
          </Form.Item>
          <Form.Item<FieldType>
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" className={styles.input} />
          </Form.Item>
          <Form.Item
                  name="emailAddress"
                  rules={[
                      { type: 'string', message: 'The input is not valid E-mail!' },
                      { required: true, message: 'Please input your E-mail!' },
                  ]}
              >
                  <Input placeholder="Email" className={styles.input}/>
              </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" className={styles.input} />
          </Form.Item>
          <Form.Item<FieldType>
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!"),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className={styles.input}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Register
            </Button>
          </Form.Item>
          <div>
            <a href="/login" className={styles.text}>
              Already Have Account
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
