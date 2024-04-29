"use client";

import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ManageHospitalsTable = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1, name: "Hospital A", Url: "url1" },
    { id: 2, name: "Hospital B", Url: "url2" },
    { id: 3, name: "Hospital C", Url: "url3" },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

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
      title: "Url",
      dataIndex: "Url",
      key: "url",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button onClick={() => editHospital(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => deleteHospital(record.id)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const addHospital = () => {
    form.resetFields();
    setSelectedHospital(null);
    setIsModalVisible(true);
  };

  const editHospital = (hospital: any) => {
    form.setFieldsValue(hospital);
    setSelectedHospital(hospital);
    setIsModalVisible(true);
  };

  const deleteHospital = (id: any) => {
    setDataSource(dataSource.filter((hospital) => hospital.id !== id));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedHospital) {
        setDataSource(
          dataSource.map((hospital) =>
            hospital.id === selectedHospital.id
              ? { ...hospital, ...values }
              : hospital,
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
    <>
      <Button onClick={addHospital} style={{ marginBottom: 16 }}>
        Add Hospital
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
        title={selectedHospital ? "Edit Hospital" : "Add Hospital"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={selectedHospital}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="url"
            label="Url"
            rules={[{ required: true, message: "Please enter the address" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ManageHospitalsTable;
