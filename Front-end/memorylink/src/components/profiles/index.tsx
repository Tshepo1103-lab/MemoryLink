"use client";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Upload,
  Table,
  ConfigProvider,
  UploadProps,
  message,
  UploadFile,
  GetProp,
} from "antd";
import { useStyles } from "./style/style";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";
import { useSearchActions, useSearchState } from "@/providers/AIsearchProvider";
import Loader from "../loader";
import axios from "axios";

const props: UploadProps = {
  name: "file",
  action: "http://localhost:8000/facematch",
  headers: {
    authorization: "authorization-text",
  },
  method: "POST",
  onChange(info) {
    if (info.file.status !== "uploading") {
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

interface Profile {
  id: string;
}

const ProfilesFC = () => {
  const { push } = useRouter();
  const { styles } = useStyles();
  const {
    getalldeceasedProfiles,
    getallAliveProfiles,
    getFaceProfile,
    getRecent,
  } = useProfileActions();
  const status = useProfileState();
  const state = useSearchState();
  const { searchProfiles } = useSearchActions();
  const [file, setFile] = useState<UploadFile>();
  const [matchProfiles, setMatchProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    if (getalldeceasedProfiles) getalldeceasedProfiles();
    getallAliveProfiles();
    getRecent();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!matchProfiles || matchProfiles.length === 0) return;
      try {
        const promises = matchProfiles.map(async (profile) => {
          const id = profile.id;
          const response = await getFaceProfile(id);
          return response;
        });
        const profileResponses = await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchData();
  }, [matchProfiles]);
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
          {`View Record ${text}`}
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

  const searchColumns = [
    {
      title: "Record Number",
      dataIndex: "id",
      key: "recordNumber",
      render: (text: string, record: any) => (
        <Button type="link" onClick={() => handleRecordClick(record.id)}>
          {`View Record ${text}`}
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
            pagination={{ pageSize: 4 }}
          />
        </ConfigProvider>
      ),
    },
  ];

  const onFinish = (values: any) => {
    const searchText = values.value;
    if (searchProfiles) searchProfiles(searchText);
  };

  const onChange = (key: string) => {
    console.log(key);
  };
  const handleReset = () => {
    window.location.reload();
  };

  const picUploadProps: UploadProps = {
    onRemove: () => {
      setFile(undefined);
    },
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
    fileList: file ? [file] : [],
  };

  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]; // the 0th prop param represents a file
  const handlePicUpload = () => {
    const formData = new FormData();
    if (!file) {
      message.error("Please select a file to upload.");
      return;
    }

    formData.append("file", file as FileType);
    message.loading("Search is taking place");
    axios
      .post("http://localhost:8000/facematch", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setFile(undefined);
        message.success("Results are back!");
        return res.data;
      })
      .then((data) => {
        setMatchProfiles(data);
        if (data.length) {
        } else {
          message.info("No results found");
        }
      })
      .catch(() => message.error("Profile not found"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.header}>Profile Records</h1>
      <p className={styles.paragraph}>
        Upload an image to search, or alternatively, try to describe as much as
        possible. This is an AI search, which works with similarities.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "73px",
          paddingTop: "10px",
        }}
      >
        <Form
          style={{ display: "flex", marginRight: "16px" }}
          onFinish={onFinish}
        >
          <Form.Item name="value" style={{ marginBottom: 0 }}>
            <Input
              placeholder="Search here"
              style={{ height: 30, width: "500px" }}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            {state.searchedProfiles ? (
              <Button onClick={handleReset}>Reset</Button>
            ) : (
              <Button htmlType="submit">
                <SearchOutlined />
              </Button>
            )}
          </Form.Item>
        </Form>
        <div style={{ display: "flex" }}>
          <Upload {...picUploadProps} style={{ marginRight: "16px" }}>
            <Button
              icon={<UploadOutlined />}
              style={{
                width: "100px",
                backgroundColor: "#003366",
                color: "#fff",
              }}
            >
              Upload
            </Button>
          </Upload>
          <>
            {status.faceProfiles ? (
              <Button onClick={handleReset}>Reset</Button>
            ) : (
              <Button
                onClick={handlePicUpload}
                style={{ backgroundColor: "#003366", color: "#fff" }}
              >
                <SearchOutlined />
              </Button>
            )}
          </>
        </div>
      </div>
      {state.isPending ? (
        <Loader />
      ) : (
        <div className={styles.recordsContainer}>
          {state.searchedProfiles || status.faceProfiles ? (
            <>
              {state.searchedProfiles && (
                <>
                  <p className={styles.answer}>
                    {state.searchedProfiles.answer}
                  </p>
                  <br />
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
                      style={{ width: "100%" }}
                      columns={searchColumns}
                      dataSource={state.searchedProfiles.profiles.profiles}
                      pagination={{ pageSize: 6 }}
                    />
                  </ConfigProvider>
                </>
              )}
              {status.faceProfiles && (
                <>
                  <p className={styles.answer}>Face Recognition Results</p>
                  <br />
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
                      style={{ width: "100%" }}
                      columns={columns}
                      dataSource={status.faceProfiles}
                      pagination={{ pageSize: 6 }}
                    />
                  </ConfigProvider>
                </>
              )}
            </>
          ) : (
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilesFC;
