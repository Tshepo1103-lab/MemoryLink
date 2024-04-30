"use client";

import {
  useHospitalActions,
  useHospitalState,
} from "@/providers/HospitalProvider";
import { IHospital } from "@/providers/HospitalProvider/context";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";

const ManageHospitalsTable = () => {
  const { getallhospital, addhospital, deletehospital, updatehospital } =
    useHospitalActions();
  const status = useHospitalState();

  const [dataSource, setDataSource] = useState(status.hospitals);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    if (getallhospital) getallhospital();
    setDataSource(status.hospitals);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
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

  const editHospital = (hospital: IHospital) => {
    form.setFieldsValue(hospital);
    setSelectedHospital(hospital);
    setIsModalVisible(true);
  };

  const deleteHospital = (id: any) => {
    if (deletehospital) deletehospital(id);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedHospital) {
        // Include the ID of the selected hospital in the values passed to updatehospital
        if (updatehospital)
          updatehospital({ id: selectedHospital.id, ...values });
      } else {
        if (addhospital) addhospital(values);
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
          dataSource={status.hospitals}
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
            rules={[
              {
                required: true,
                message: "Please enter the url for direcrtions",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact"
            rules={[
              { required: true, message: "Please enter the contact details" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ManageHospitalsTable;
