'use client'

import React from "react";
import { useStyles } from "./style/style";
import recent from "./style/recent.module.css";
import { Carousel, Card, Flex, Typography, Button } from "antd";

const RecentReport = () => {
  const data = [
    {
      hospital: "Steve Biko",
      src: "/hospitals",
      image: "assets/images/patient1.jpg",
      content: 'wertyuiosdfghj'
    },
    {
      hospital: "Tshwane",
      src: "/profiles",
      image: "assets/images/patient2.jpg",
      content: 'wertyuiosdfghj'
    },
  ];

  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <div className={styles.child}>
        <div className={recent.typewriter}>
          <h1 className={styles.header}>LATEST REPORTED</h1>
          <br />
          <Carousel effect="fade" style={{ width: "100%", height: "50vh" }}>
            {data.map((item, index) => (
              <div key={index} style={{ height: "100%" }}>
                <Card className={styles.card}>
                  <Flex>
                    <div>
                      <img alt="avatar" src={item.image} className={styles.image} />
                    </div>
                    <div style={{ flex: 1, marginLeft: 16 }}>
                      <Typography.Title level={2} style={{ color: "#fff" }}>
                        {item.hospital}
                      </Typography.Title>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: 1 }}>
                          <p>{item.content}</p>
                          <p>{item.content}</p>
                          <p>{item.content}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p>{item.content}</p>
                          <p>{item.content}</p>
                          <Button type="primary" href={item.src} target="_blank">
                            Send Lead
                          </Button>
                        </div>
                      </div>
                    </div>
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
