'use client'

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, ConfigProvider } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ManageProfilesTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Doe',
      gender: 'Male',
      address: 'New York',
      ward: '4',
      hospital: 'Bara',
      age: '30-35',
      image: '/assets/images/profile1.png',
      EyeColor: 'Brown',
      Build: 'Slender',
      HairColor: 'Black',
      SkinTone: 'Brown',
      DistinguishingFeature: 'Tattoo on the left wrist',
      MoreDetails: 'None',
      dateAdmitted: '01-01-2023',
    },
    {
      key: '2',
      name: 'Jane Smith',
      gender: 'Female',
      address: 'Los Angeles',
      ward: '7',
      hospital: 'General Hospital',
      age: '25-30',
      image: '/assets/images/profile2.png',
      EyeColor: 'Blue',
      Build: 'Athletic',
      HairColor: 'Blonde',
      SkinTone: 'Fair',
      DistinguishingFeature: 'Scar on forehead',
      MoreDetails: 'Allergic to penicillin',
      dateAdmitted: '02-15-2023',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width:'10%'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width:'5%'
    },
    {
      title: 'Ward',
      dataIndex: 'ward',
      key: 'ward',
      width:'5%'
    },
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital',
      width:'10%'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width:'5%'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_:any, record:any) => (
        <Space size="middle">
          <Button onClick={() => editProfile(record)}><EditOutlined /></Button>
          <Button onClick={() => deleteProfile(record.key)}><DeleteOutlined /></Button>
        </Space>
      ),
      width:'5%'
    },
  ];

  const addProfile = () => {
    form.resetFields();
    setSelectedProfile(null);
    setIsModalVisible(true);
  };

  const editProfile = (profile:any) => {
    form.setFieldsValue(profile);
    setSelectedProfile(profile);
    setIsModalVisible(true);
  };

  const deleteProfile = (key:any) => {
    setDataSource(dataSource.filter((profile) => profile.key !== key));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (selectedProfile) {
        setDataSource(
          dataSource.map((profile) =>
            profile.key === selectedProfile.key ? { ...profile, ...values } : profile
          )
        );
      } else {
        setDataSource([...dataSource, { ...values, key: Date.now().toString() }]);
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{margin:'50px'}}>
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
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </ConfigProvider>
      
      <Modal
        title={selectedProfile ? 'Edit Profile' : 'Add Profile'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={selectedProfile}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the name' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please enter the gender' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter the address' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="ward" label="Ward" rules={[{ required: true, message: 'Please enter the ward' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="hospital" label="Hospital" rules={[{ required: true, message: 'Please enter the hospital' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please enter the age' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageProfilesTable;
