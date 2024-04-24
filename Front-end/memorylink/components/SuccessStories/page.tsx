"use client";

import React from "react";
import { useStyles } from "./style/style";
import { Card, Space } from "antd";
import Link from "next/link";

const SuccessStories = () => {
  const { styles } = useStyles();

  const data = [
    { hospital: "Steve Biko", src: "/hospitals", image: "assets/images/patient1.jpg" },
    { hospital: "Tshwane", src: "/profiles", image: "assets/images/patient2.jpg" },
    { hospital: "Steve Biko", src: "/hospitals", image: "assets/images/patient1.jpg" },
    { hospital: "Tshwane", src: "/profiles", image: "assets/images/patient2.jpg" },

  ];


  return(
    <div className={styles.main}>
      <div className={styles.container}>
        <Space className={styles.cardBox}>
          {data.map((item, index) => (
            <Link href='' key={index}>
              <Card className={styles.card}>
                <h1>{item.hospital}</h1>
              </Card>
            </Link>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default SuccessStories;
