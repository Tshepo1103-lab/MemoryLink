"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";

const ManageProfilesTable = ({ hospitalId }: { hospitalId: string }) => {
  const status = useProfileState();
  const { getbyhospital } = useProfileActions();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    if (getbyhospital) console.log(hospitalId);
    getbyhospital(hospitalId);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [form] = Form.useForm();

  const columns = [
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "5%",
    },
    {
      title: "AdmissionDate",
      dataIndex: "admissionDate",
      key: "ward",
      width: "5%",
    },
    {
      title: "Ward",
      dataIndex: "ward",
      key: "ward",
      width: "5%",
    },
    {
      title: "Age",
      dataIndex: "ageRange",
      key: "age",
      width: "5%",
    },
    {
      title: "build",
      dataIndex: "build",
      key: "hospital",
      width: "5%",
    },
    {
      title: "eyeColor",
      dataIndex: "eyeColor",
      key: "hospital",
      width: "5%",
    },
    {
      title: "height",
      dataIndex: "height",
      key: "hospital",
      width: "5%",
    },
    {
      title: "skinTone",
      dataIndex: "skinTone",
      key: "hospital",
      width: "5%",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "hospital",
      width: "5%",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button onClick={() => editProfile(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => deleteProfile(record.key)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
      width: "1%",
    },
  ];

  const addProfile = () => {
    form.resetFields();
    setSelectedProfile(null);
    setIsModalVisible(true);
  };

  const editProfile = (profile: any) => {
    form.setFieldsValue(profile);
    setSelectedProfile(profile);
    setIsModalVisible(true);
  };

  const deleteProfile = (key: any) => {
    setDataSource(dataSource.filter((profile) => profile.key !== key));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedProfile) {
        setDataSource(
          dataSource.map((profile) =>
            profile.key === selectedProfile.key
              ? { ...profile, ...values }
              : profile,
          ),
        );
      } else {
        setDataSource([
          ...dataSource,
          { ...values, key: Date.now().toString() },
        ]);
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: "50px" }}>
      <Button onClick={addProfile} style={{ marginBottom: 16 }}>
        Add Profile
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
          dataSource={status?.hospitalProfiles}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </ConfigProvider>

      <Modal
        title={selectedProfile ? "Edit Profile" : "Add Profile"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={selectedProfile}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please enter the gender" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="admissionDate"
            label="Admission Date"
            rules={[
              { required: true, message: "Please enter the admission date" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ward"
            label="Ward"
            rules={[{ required: true, message: "Please enter the ward" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: "Please enter the age" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="build"
            label="Build"
            rules={[{ required: true, message: "Please enter the build" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="eyeColor"
            label="Eye color"
            rules={[{ required: true, message: "Please enter the eye color" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="height"
            label="Height"
            rules={[{ required: true, message: "Please enter the height" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="skinTone"
            label="Skin tone"
            rules={[{ required: true, message: "Please enter the height" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please enter the height" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="moreDetails" label="More details">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageProfilesTable;
