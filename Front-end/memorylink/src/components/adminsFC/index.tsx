"use client";

import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ManageAdminsTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Admin A",
      surname: "Surname A",
      email: "adminA@example.com",
      username: "adminA",
      password: "passwordA",
    },
    {
      id: 2,
      name: "Admin B",
      surname: "Surname B",
      email: "adminB@example.com",
      username: "adminB",
      password: "passwordB",
    },
    {
      id: 3,
      name: "Admin C",
      surname: "Surname C",
      email: "adminC@example.com",
      username: "adminC",
      password: "passwordC",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const [form] = Form.useForm();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
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
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
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
    setDataSource(dataSource.filter((admin) => admin.id !== id));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedAdmin) {
        setDataSource(
          dataSource.map((admin) =>
            admin.id === selectedAdmin.id ? { ...admin, ...values } : admin,
          ),
        );
      } else {
        setDataSource([...dataSource, { ...values, id: Date.now() }]);
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: "50px" }}>
      <Button onClick={addAdmin} style={{ marginBottom: 16 }}>
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
          dataSource={dataSource}
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
            name="email"
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
        </Form>
      </Modal>
    </div>
  );
};

export default ManageAdminsTable;
