import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Table, ConfigProvider } from "antd";
import { useStyles } from "./style/style";
import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";

const ProfilesFC = () => {
  const { push } = useRouter();
  const { styles } = useStyles();
  const { getalldeceasedProfiles, getallAliveProfiles } = useProfileActions();
  const status = useProfileState();

  useEffect(() => {
    if (getalldeceasedProfiles) getalldeceasedProfiles();
    getallAliveProfiles();
  }, []);

  const handleRecordClick = (id: string) => {
    push(`profiles/${id}`);
  };
  const columns = [
    {
      title: "Record Number",
      dataIndex: "id",
      key: "recordNumber",
      render: (text: string, record: any) => (
        <Button type="link" onClick={() => handleRecordClick(record.id)}>
          {text}
        </Button>
      ),
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
      dataIndex: "distinguishingFeature",
      key: "distinguishFeature",
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
                borderColor: "#003366",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={status.aliveprofile}
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
                borderColor: "#003366",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={status.deceasedprofile}
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
