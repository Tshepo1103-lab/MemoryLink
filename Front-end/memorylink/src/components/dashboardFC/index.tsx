"use client";

import {
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Progress, Space, Statistic, Typography } from "antd";

import LineGraphComponent from "@/components/stats/lineChart";
import {
  useProfileActions,
  useProfileState,
} from "@/providers/ProfileProvider";
import { useEffect } from "react";

const DashboardFC = () => {
  const state = useProfileState();
  const { countallprofiles, countdeceased, countalive } = useProfileActions();

  useEffect(() => {
    if (countallprofiles && countdeceased && countalive) countallprofiles();
    countalive();
    countdeceased();
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title
        level={3}
        style={{ marginLeft: "45%", color: "black", letterSpacing: "0.15em" }}
      >
        Summary
      </Typography.Title>
      <Space direction="horizontal" style={{ width: "90%", margin: "0 auto" }}>
        <Card
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 128, 0.1))",
          }}
        >
          <Space direction="horizontal">
            <UserOutlined
              style={{
                color: "yellow",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title="All profiles" value={state?.allProfileCount} />
          </Space>
          <Progress
            type="circle"
            percent={100}
            width={80}
            strokeWidth={10}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            trailColor="#f5f5f5"
            format={(percent) => `${percent}%`}
            style={{ margin: "0 20px" }}
          />
        </Card>
        <Card
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 128, 128, 0.1))",
          }}
        >
          <Space direction="horizontal">
            <UserAddOutlined
              style={{
                color: "Teal",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title="Alive" value={state?.aliveCount} />
          </Space>
          <Progress
            type="circle"
            percent={95}
            width={80}
            strokeWidth={10}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            trailColor="#f5f5f5"
            format={(percent) => `${percent}%`}
            style={{ margin: "0 20px" }}
          />
        </Card>
        <Card
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 0, 0, 0.1))",
          }}
        >
          <Space direction="horizontal">
            <UserDeleteOutlined
              style={{
                color: "Red",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title="Deceased" value={state?.deceasedCount} />
          </Space>
          <Progress
            type="circle"
            percent={40}
            width={80}
            strokeWidth={10}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            trailColor="#f5f5f5"
            format={(percent) => `${percent}%`}
            style={{ margin: "0 20px" }}
          />
        </Card>
      </Space>

      <Space direction="horizontal" align="center">
        <Card style={{ background: "transparent" }}>
          <LineGraphComponent />

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            Reported Incidents monthly
          </div>
        </Card>
      </Space>
    </Space>
  );
};

export default DashboardFC;
