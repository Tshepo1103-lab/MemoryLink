'use client'

import React from "react";
import { useStyles } from "./style/style";
import recent from './style/recent.module.css';
import { Carousel, Card, Flex, Typography, Button } from 'antd';

const RecentReport = () => {
  const data = [
    { hospital: "Steve Biko", src: "/hospitals", image: "assets/images/patient1.jpg" },
    { hospital: "Tshwane", src: "/profiles", image: "assets/images/patient2.jpg" },

  ];

  const { styles } = useStyles();

  return (
    <div className={styles.main}>
        <div className={styles.child}>
          <div className={recent.typewriter}>
            <h1 className={styles.header}>LATEST REPORTED</h1>
            <br/>
            <Carousel effect="fade" style={{ width: '100%', height: '50vh' }}>
              {data.map((item, index) => (
                <div key={index} style={{ height: '100%' }}>
                  <Card className={styles.card}>
                    <img
                      alt="avatar"
                      src={item.image}
                      className={styles.image}
                    />
                    <Flex justify="space-between" style={{ padding: '16px' }}>
                      <Typography.Title level={2} style={{ color: '#fff' }}>
                        {item.hospital}
                      </Typography.Title>
                      <Button type="primary" href={item.src} target="_blank">
                        Send Lead
                      </Button>
                    </Flex>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
  );
};

export default RecentReport;
