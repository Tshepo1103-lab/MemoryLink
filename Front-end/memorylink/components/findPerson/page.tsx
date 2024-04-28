"use client";

import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useStyles } from "./style/style";

const { Dragger } = Upload;

const FingerprintCapture = () => {
  const { styles } = useStyles();

  const [fingerprintRead, setFingerprintRead] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [form] = Form.useForm();

  const handleFingerprintCapture = () => {
    setFingerprintRead(true);
    const userExistsInDatabase = true;
    if (userExistsInDatabase) {
      setUserDetails({
        id: 123456,
        name: "John",
        surname: "Doe",
        nextOfKin: "Jane Doe",
      });
    } else {
      setUserDetails(null);
    }
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  const handleUpload = (info: any) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }}>
        {!fingerprintRead ? (
          <div>
            <h2 className={styles.header}>Fingerprint Scan</h2>
            <div
              style={{
                width: "60%",
                height: "250px",
                border: "2px dashed #ccc",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "50px",
              }}
            >
              <p>Place for fingerprint capture</p>
            </div>
            <Button
              type="primary"
              style={{
                backgroundColor: "#003366",
                marginTop: "20px",
                width: "60%",
              }}
              onClick={handleFingerprintCapture}
            >
              Search
            </Button>
          </div>
        ) : (
          <div>
            <p>Fingerprint captured successfully!</p>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h2 className={styles.header}>User details</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Id number" name="id">
            <Input />
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Surname" name="surname">
            <Input />
          </Form.Item>
          <Form.Item label="Next of Kin" name="nextOfKin">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Details
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.dragbox}>
        <h2 className={styles.header}>Image of the patient</h2>
        <Dragger
          style={{ width: "100%" }}
          name="file"
          multiple={false}
          onChange={handleUpload}
          accept=".jpg,.jpeg,.png"
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
    </div>
  );
};

export default FingerprintCapture;
