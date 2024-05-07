"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  ConfigProvider,
  Select,
  DatePicker,
  Upload,
  Col,
  Row,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";
import {
  gender,
  ageRange,
  build,
  eyeColor,
  skinTone,
  height,
  hairColor,
  type,
} from "@/utils/enums/reflist";
import { IProfileRequest } from "@/providers/ProfileProvider/context";

const ManageProfilesTable = ({
  params,
}: {
  params: { manageprofiles: string };
}) => {
  const status = useProfileState();
  const { getbyhospital, getallAliveProfiles, createprofile, deleteProfile } =
    useProfileActions();
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
          <Button onClick={() => handledeleteProfile(record.id)}>
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

  const handledeleteProfile = (key: any) => {
    setDataSource(status?.aliveprofile.filter((profile) => profile.id !== key));
    if (deleteProfile) deleteProfile(key);
  };

  const handleOk = () => {
    form.validateFields().then((values: IProfileRequest) => {
      const formData = new FormData();
      const formattedDate = dayjs(values.admissionDate).format("DD-MM-YYYY");

      const updatedValues: IProfileRequest = {
        ...values,
        admissionDate: formattedDate,
        file: values?.imageUrl?.file?.originFileObj,
      };
      if (selectedProfile) {
        // Update existing profile
        setDataSource(
          dataSource.map((profile) =>
            profile.key === selectedProfile.key
              ? { ...profile, ...values }
              : profile,
          ),
        );
      } else {
        if (createprofile) {
          createprofile(updatedValues);
        }
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
        style={{ width: "800px !important" }}
      >
        <Form form={form} layout="vertical" initialValues={selectedProfile}>
          <Row gutter={16}>
            <Col span={12}>
              {/* Left Side of the Form */}
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please enter the gender" }]}
              >
                <Select
                  options={gender.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="age"
                label="Age Range"
                rules={[{ required: true, message: "Please enter the age" }]}
              >
                <Select
                  options={ageRange.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="build"
                label="Build"
                rules={[{ required: true, message: "Please enter the build" }]}
              >
                <Select
                  options={build.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="eyeColor"
                label="Eye color"
                rules={[
                  { required: true, message: "Please enter the eye color" },
                ]}
              >
                <Select
                  options={eyeColor.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="hairColor"
                label="Hair color"
                rules={[
                  { required: true, message: "Please enter the hair color" },
                ]}
              >
                <Select
                  options={hairColor.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="admissionDate"
                label="Admission Date"
                rules={[
                  {
                    required: true,
                    message: "Please enter the admission date",
                  },
                ]}
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
              <Form.Item name="moreDetails" label="More details">
                <Input.TextArea />
              </Form.Item>
              {/* Add other form items for left side here */}
            </Col>
            <Col span={12}>
              {/* Right Side of the Form */}
              <Form.Item
                name="height"
                label="Height"
                rules={[{ required: true, message: "Please enter the height" }]}
              >
                <Select
                  options={height.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="skinTone"
                label="Skin tone"
                rules={[{ required: true, message: "Please enter the height" }]}
              >
                <Select
                  options={skinTone.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please enter the height" }]}
              >
                <Select
                  options={type.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="ward"
                label="Ward"
                rules={[{ required: true, message: "Please enter the ward" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="hospitalId"
                label="Hospital"
                rules={[{ required: true, message: "Please enter the height" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="distinguishingFeature"
                label="Distinguishing feature"
              >
                <Input />
              </Form.Item>
              <Form.Item name="imageUrl" label="Profile Picture">
                <Upload action="/upload" listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageProfilesTable;
