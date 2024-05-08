"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";

const ManageProfilesTable = ({
  params,
}: {
  params: { manageprofiles: string };
}) => {
  const status = useProfileState();
  const { getbyhospital, getallAliveProfiles } = useProfileActions();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (params.manageprofiles == "admin") {
      if (getallAliveProfiles) getallAliveProfiles();
    } else if (getbyhospital) getbyhospital(params.manageprofiles);
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
          dataSource={
            params.manageprofiles == "admin"
              ? status.aliveprofile
              : status?.hospitalProfiles
          }
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
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please enter the gender" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter the address" }]}
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
            name="hospital"
            label="Hospital"
            rules={[{ required: true, message: "Please enter the hospital" }]}
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
        </Form>
      </Modal>
    </div>
  );
};

export default ManageProfilesTable;
