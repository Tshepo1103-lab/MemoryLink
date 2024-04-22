"use client";

import React from "react";
import { useStyles } from "./style/style";
import { Card, Button } from "antd";
import {
  PlusSquareOutlined,
  UserOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const Information = () => {
  const { styles } = useStyles();

  // Array of objects containing information for each card
  const cardsData = [
    {
      title: "Hospitals",
      icon: <PlusSquareOutlined />,
      content: "filter your search",
    },
    {
      title: "Profiles",
      icon: <UserOutlined />,
      content: "Content for Profiles",
    },
    {
      title: "Hospitals",
      icon: <PlusSquareOutlined />,
      content: "Content for Hospitals",
    },
    {
      title: "Profiles",
      icon: <ProfileOutlined />,
      content: "Content for Profiles",
    },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Information Center</h1>
      <div className={styles.container}>
        {cardsData.map((card, index) => (
          <Card key={index} style={{ width: 300, marginBottom: 20 }}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 18, fontWeight: "bold" }}>
                {card.title}
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>{card.icon}</div>
            <div style={{ marginBottom: 10 }}>{card.content}</div>
            <Button type="primary" style={{ marginTop: 10 }}>
              View
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Information;
