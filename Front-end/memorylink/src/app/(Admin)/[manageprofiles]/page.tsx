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
import moment from "moment";
import {
  useHospitalActions,
  useHospitalState,
} from "@/providers/HospitalProvider";

const ManageProfilesTable = ({
  params,
}: {
  params: { manageprofiles: string };
}) => {
  const status = useProfileState();
  const { createprofile, deleteProfile, getallprofiles, updateprofile } =
    useProfileActions();
  const { getallhospital } = useHospitalActions();
  const state = useHospitalState();
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (getallprofiles || getallhospital) getallprofiles();
    getallhospital();
  }, []);

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
    // Map profile keys to form field names
    const mappedProfile = {
      id: profile.id,
      gender: profile.gender,
      age: profile.ageRange,
      build: profile.build,
      eyeColor: profile.eyeColor,
      admissionDate: profile.admissionDate
        ? moment(profile.admissionDate, "DD-MM-YYYY")
        : null, // Parse admissionDate as moment object
      moreDetails: profile.moreDetails,
      height: profile.height,
      skinTone: profile.skinTone,
      type: profile.type,
      ward: profile.ward,
      hospitalId: profile.hospitalId,
      distinguishingFeature: profile.distinguishingFeature,
      imageUrl: { fileList: [{ uid: "-1", url: profile.imageUrl }] },
    };

    form.setFieldsValue(mappedProfile);
    setSelectedProfile(profile);
    setIsModalVisible(true);
  };

  const handledeleteProfile = (key: any) => {
    setDataSource(status?.allProfiles.filter((profile) => profile.id !== key));
    if (deleteProfile) deleteProfile(key);
  };

  const handleOk = () => {
    form.validateFields().then((values: IProfileRequest) => {
      // Convert admissionDate to the expected format (System.DateOnly)
      const formattedDate = moment(values.admissionDate).format("YYYY-MM-DD");

      const updatedValues: IProfileRequest = {
        ...values,
        admissionDate: formattedDate,
        file: values?.imageUrl?.file?.originFileObj,
      };

      if (selectedProfile) {
        // Update the profile locally
        const updatedProfile = {
          ...selectedProfile,
          ...updatedValues,
        };

        // Call the updateprofile action to update the profile in the backend
        if (updateprofile) {
          updateprofile(updatedProfile);
        }

        // Update the data source in the state
        setDataSource(
          dataSource.map((profile) =>
            profile.id === selectedProfile.id ? updatedProfile : profile,
          ),
        );
      } else {
        // If it's a new profile, create it
        if (createprofile) {
          createprofile(updatedValues);
        }

        // Update the data source in the state
        setDataSource([
          ...dataSource,
          { ...updatedValues, key: Date.now().toString() },
        ]);
      }

      // Close the modal
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
          dataSource={status.allProfiles}
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
                rules={[
                  { required: true, message: "Please enter the skinTone" },
                ]}
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
                rules={[{ required: true, message: "Please enter the type" }]}
              >
                <Select
                  options={type.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="locationFound"
                label="Location Found"
                rules={[
                  { required: true, message: "Please enter the location" },
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
                name="hospitalId"
                label="Hospital"
                rules={[{ required: true, message: "Please enter the height" }]}
              >
                <Select
                  options={state?.hospitals?.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                />
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
