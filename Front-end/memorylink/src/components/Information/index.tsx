"use client";

import React from "react";
import { useStyles } from "./style/style";
import { Card, Button } from "antd";
import {
  PlusSquareOutlined,
  FileImageOutlined,
  ProfileOutlined,
  OpenAIOutlined,
} from "@ant-design/icons";

const Information = () => {
  const { styles } = useStyles();

  const cardsData = [
    {
      title: "HOSPITALS",
      icon: <PlusSquareOutlined />,
      content: "Filter your search",
      src: "/hospitals",
    },
    {
      title: "PROFILES",
      icon: <ProfileOutlined />,
      content: "Browse recent reports",
      src: "/profiles",
    },
    {
      title: "AI SEARCH",
      icon: <OpenAIOutlined />,
      content: "Describe the person you are looking for",
      src: "/profiles",
    },
    {
      title: "IMAGE SEARCH",
      icon: <FileImageOutlined />,
      content: "Upload an image",
      src: "/profiles",
    },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>INFORMATION CENTER</h1>
      <div className={styles.container}>
        {cardsData.map((card, index) => (
          <Card key={index} className={styles.card}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 18, fontWeight: "bold" }}>
                {card.title}
              </span>
            </div>
            <div className={styles.icon}>{card.icon}</div>
            <div style={{ marginBottom: 10 }}>{card.content}</div>
            <Button type="primary" className={styles.view} href={card.src}>
              View
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Information;
