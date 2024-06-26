"use client";
import {
  useCommentActions,
  useCommentState,
} from "@/providers/CommentProvider";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";
import { IProfileResponse } from "@/providers/ProfileProvider/context";
import { Button, ConfigProvider, Drawer, Modal, Table } from "antd";
import { toNumber } from "lodash";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style/style";
import { getId } from "@/utils/decoder/decoder";
import WithRole from "@/hoc/withRole";

const PatientDetailsPage = ({ params }: { params: { profileId: string } }) => {
  const { getprofile } = useProfileActions();
  const { createcomment, getcomments } = useCommentActions();
  const status = useProfileState();
  const state = useCommentState();
  const { styles } = useStyles();
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (getprofile || getcomments) getprofile(params.profileId);
    getcomments(toNumber(params.profileId));
  }, []);

  const __profile = status.profile
    ? {
        ...status.profile,
        hospital: status.profile.hospital.name || undefined,
        url: status.profile.hospital.url || undefined,
      }
    : undefined;

  const columns = [
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospitalid",
    },
    {
      title: "Ward",
      dataIndex: "ward",
      key: "ward",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Build",
      dataIndex: "build",
      key: "Build",
    },

    {
      title: "Age-Range",
      dataIndex: "ageRange",
      key: "age",
    },
    {
      title: "Eye Color",
      dataIndex: "eyeColor",
      key: "eyeColor",
    },
    {
      title: "Hair Color",
      dataIndex: "hairColor",
      key: "HairColor",
    },
    {
      title: "Skin Tone",
      dataIndex: "skinTone",
      key: "SkinTone",
    },
    {
      title: "Distinguishing Feature",
      dataIndex: "distinguishingFeature",
      key: "distinguishingFeature",
    },
    {
      title: "More Details",
      dataIndex: "moreDetails",
      key: "MoreDetails",
    },
    {
      title: "Date Admitted",
      dataIndex: "admissionDate",
      key: "dateAdmitted",
    },
  ];

  const transposedDataSource = columns.map((column) => {
    return {
      key: column.key,
      attribute: column.title,
      "Row 1": __profile
        ? __profile[column.dataIndex as keyof IProfileResponse]
        : "",
    };
  });
  const transposedColumns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
      key: "attribute",
      width: "300px",
    },
    {
      title: "Details",
      dataIndex: "Row 1",
      key: "Row 1",
      width: "400px",
    },
  ];

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    const userid = getId(localStorage.getItem("accessToken"));
    createcomment({
      userId: toNumber(userid),
      profileId: toNumber(params.profileId),
      message: commentText,
    });
    getcomments(toNumber(params.profileId));
    setCommentText("");
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Patient Details</h1>
      <div className={styles.mother}>
        <div className={styles.child}>
          <img
            src={`data:image/png;base64,${status.profile?.image}`}
            alt={status.profile?.distinguishingFeature}
            style={{ width: "50%", height: "50vh", marginLeft: "20px" }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerBg: "#003366",
                    headerColor: "#fff",
                    borderColor: "#003366",
                    colorIcon: "#fff",
                  },
                },
              }}
            >
              <Table
                style={{
                  width: "fit-content",
                  alignSelf: "center",
                  margin: "auto !important",
                  height: "40vh",
                  marginLeft: "20px",
                  display: "block",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                dataSource={transposedDataSource}
                columns={transposedColumns}
                bordered
                pagination={{ pageSize: 4 }}
              />
            </ConfigProvider>
            <div style={{ marginTop: "25px" }}>
              <Link href={`${status.profile?.hospital.url}`} target="_Blank">
                <Button className={styles.button}>Directions</Button>
              </Link>
              <Button className={styles.button} onClick={showModal}>
                Comment
              </Button>
              <Button className={styles.button} onClick={showDrawer}>
                View Comments
              </Button>
            </div>
            <Modal
              title="Add Comment"
              okText="Send"
              open={isModalOpen}
              onOk={handleCommentSubmit}
              onCancel={handleCancel}
            >
              <div className={styles.commentMain}>
                <textarea
                  className={styles.input}
                  value={commentText}
                  onChange={handleCommentChange}
                />
              </div>
            </Modal>
            <Drawer title="Comments" onClose={onClose} visible={open}>
              {state?.comments?.map((item, index) => (
                <div key={index} className={styles.comment}>
                  <h3>{item.user.name + " " + item.user.surname}</h3>
                  <br />
                  <h5>{item.message}</h5>
                  <br />
                  <h6>{new Date(item.dateSent).toLocaleString()}</h6>
                </div>
              ))}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRole(PatientDetailsPage);
