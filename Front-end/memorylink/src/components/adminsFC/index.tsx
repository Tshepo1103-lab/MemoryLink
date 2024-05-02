"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useAdminActions, useAdminState } from "@/providers/AdminProviders";
import { useStyles } from "./style/style";

const ManageAdminsTable = () => {

  const {styles} = useStyles();
  const status=useAdminState();
  const {getalladmins,adminregister,deleteadmin,updateadmin} = useAdminActions();

  useEffect(()=>{
    if(getalladmins)
      getalladmins()
    console
  },[])
  const [dataSource, setDataSource] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const [form] = Form.useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "emailAddress",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "username",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button onClick={() => editAdmin(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => deleteAdmin(record.id)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ].filter(Boolean);

  const addAdmin = () => {
    form.resetFields();
    setSelectedAdmin(null);
    setIsModalVisible(true);
  };

  const editAdmin = (admin: any) => {
    form.setFieldsValue(admin);
    setSelectedAdmin(admin);
    setIsModalVisible(true);
  };

  const deleteAdmin = (id: any) => {
    if(deleteadmin) deleteadmin(id)
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedAdmin) {
        if (updateadmin)
          updateadmin({ id: selectedAdmin.id, ...values });
      } else {
        const updatedValues = {
          ...values,
          isActive: true,
          roleNames: ["admin"],
        };
        if (adminregister) adminregister(updatedValues);
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1 className={styles.header}>Manage Admins</h1>
      <Button onClick={addAdmin} style={{ marginBottom: 16 , backgroundColor:'#003366', color:'#fff'}}>
        Add Admin
      </Button>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#003366",
              headerColor: "#fff",
              rowHoverBg: "#009999",
              borderColor: "#003366",
            },
          },
        }}
      >
        <Table
          dataSource={status.Admins}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </ConfigProvider>

      <Modal
        title={selectedAdmin ? "Edit Admin" : "Add Admin"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={selectedAdmin}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="surname"
            label="Surname"
            rules={[{ required: true, message: "Please enter the surname" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="emailAddress"
            label="Email"
            rules={[{ required: true, message: "Please enter the email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter the username" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password"  />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageAdminsTable;
