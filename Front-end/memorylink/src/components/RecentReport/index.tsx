"use client";
import React, { useEffect } from "react";
import { useStyles } from "./style/style";
import recent from "./style/recent.module.css";
import { Carousel, Card, Flex, Typography, Button } from "antd";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";
import { useRouter } from "next/navigation";

const RecentReport = () => {
  const { getRecent } = useProfileActions();
  const status = useProfileState();
  const { styles } = useStyles();
  const { push } = useRouter();

  useEffect(() => {
    if (getRecent) getRecent();
  }, []);

  const handleClick = (id: number) => {
    push(`/profiles/${id}`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.child}>
        <div className={recent.typewriter}>
          <h1 className={styles.header}>LATEST REPORTED</h1>
          <br />
          <Carousel effect="fade" style={{ width: "100%", height: "50vh" }}>
            {status?.recentProfile?.map((item, index) => (
              <div key={index} style={{ height: "100%" }}>
                <Card className={styles.card}>
                  <Flex>
                    <div>
                      <img
                        alt="avatar"
                        src={`data:image/png;base64,${item.image}`}
                        className={styles.image}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Typography.Title level={2} style={{ color: "#fff" }}>
                        {item.hospital.name}
                      </Typography.Title>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ flex: 1 }}>
                          <div>
                            <p style={{ color: "#fff" }}>
                              Gender: {item.gender}
                            </p>
                            <p style={{ color: "#fff" }}>
                              Eye Color: {item.eyeColor}
                            </p>
                            <p style={{ color: "#fff" }}>
                              Location Found: {item.locationFound}
                            </p>
                          </div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div>
                            <p style={{ color: "#fff" }}>
                              Skin Tone: {item.skinTone}
                            </p>
                            <p style={{ color: "#fff" }}>
                              Hair Color: {item.hairColor}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        style={{
                          backgroundColor: "#fff",
                          color: "#003366",
                          width: "150px",
                          marginTop: "100px",
                        }}
                        type="primary"
                        onClick={() => handleClick(item.id)}
                      >
                        More details
                      </Button>
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
