import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Table, ConfigProvider } from "antd";
import { useStyles } from "./style/style";
import { Tabs } from "antd";
import React from "react";

const ProfilesFC = () => {
  const { styles } = useStyles();

  const columns = [
    {
      title: "Record Number",
      dataIndex: "recordNumber",
      key: "recordNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age Range",
      dataIndex: "ageRange",
      key: "ageRange",
    },
    {
      title: "Admission Date",
      dataIndex: "admissionDate",
      key: "admissionDate",
    },
    {
      title: "Distinguish Feature",
      dataIndex: "distinguishFeature",
      key: "distinguishFeature",
    },
  ];

  const data = [
    {
      key: "1",
      recordNumber: "001",
      gender: "Male",
      ageRange: "25-35",
      admissionDate: "2024-04-24",
      distinguishFeature: "Scar on left arm",
    },
    {
      key: "2",
      recordNumber: "003",
      gender: "Female",
      ageRange: "40-50",
      admissionDate: "2024-04-25",
      distinguishFeature: "Tattoo on right wrist",
    },
    {
      key: "2",
      recordNumber: "004",
      gender: "Female",
      ageRange: "40-50",
      admissionDate: "2024-04-25",
      distinguishFeature: "Tattoo on right wrist",
    },
    {
      key: "4",
      recordNumber: "005",
      gender: "Female",
      ageRange: "40-50",
      admissionDate: "2024-04-25",
      distinguishFeature: "Tattoo on right wrist",
    },
  ];

  const items = [
    {
      key: "1",
      label: "Patient",
      children: (
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
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 6 }}
          />
        </ConfigProvider>
      ),
    },
    {
      key: "2",
      label: "Deceased",
      children: (
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
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 6 }}
          />
        </ConfigProvider>
      ),
    },
  ];

  const onFinish = () => {
    // Implement your search logic here
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      <h1 className={styles.header}>Profile Records</h1>
      <p className={styles.paragraph}>
        Upload an image to search, or alternatively, try to describe as much as
        possible. This is an AI search, which works with similarities.
      </p>
      <div className={styles.searchContainer}>
        <Form
          style={{ display: "flex", flexDirection: "row" }}
          onFinish={onFinish}
          className={styles.searchBox}
        >
          <Form.Item name="value">
            <Input
              placeholder="Search here"
              style={{ width: 500, height: 30 }}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">
              <SearchOutlined />
            </Button>
          </Form.Item>
          <Upload>
            <Button
              icon={<UploadOutlined />}
              style={{
                width: "100px",
                alignItems: "center",
                position: "absolute",
                top: "0",
                marginLeft: "10px",
                backgroundColor: "#003366",
                color: "#fff ",
              }}
            />
          </Upload>
        </Form>
      </div>
      <div className={styles.recordsContainer}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default ProfilesFC;
