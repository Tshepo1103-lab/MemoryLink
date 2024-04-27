'use client'

import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const FingerprintCapture = () => {
    const [fingerprintRead, setFingerprintRead] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [form] = Form.useForm();

    const handleFingerprintCapture = () => {
        setFingerprintRead(true);
        const userExistsInDatabase = true;
        if (userExistsInDatabase) {
            setUserDetails({
                id: 123456,
                name: 'John',
                surname: 'Doe',
                nextOfKin: 'Jane Doe',
            });
        } else {
            setUserDetails(null);
        }
    };

    const onFinish = (values:any) => {
        console.log('Received values:', values);
    };

    const handleUpload = (info:any) => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                {!fingerprintRead ? (
                    <>
                        <div style={{ width: '40%', height: '200px', border: '2px dashed #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'30px' }}>
                            <p>Place for fingerprint capture</p>
                        </div>
                        <button onClick={handleFingerprintCapture}>Capture Fingerprint</button>
                    </>
                ) : (
                    <div>
                        <p>Fingerprint captured successfully!</p>
                    </div>
                )}
            </div>
            <div style={{ flex: 1 }}>
                <h2>User Details</h2>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item label="ID" name="id">
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
                    <Form.Item label="Phone Numbers" name="phoneNumber">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div style={{ flex: 1 }}>
                <Dragger
                    name="file"
                    multiple={false}
                    onChange={handleUpload}
                    accept=".jpg,.jpeg,.png"
                    showUploadList={false}
                    style={{width:'80%', margin:'30px'}}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </Dragger>
            </div>
        </div>
    );
};

export default FingerprintCapture;
