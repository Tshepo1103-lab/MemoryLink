"use client";

import {
  DesktopOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import { useStyles } from "./style";
import WithAdminRole from "../../../HOC/withRole";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <PieChartOutlined /> },
    { name: "Profiles", href: "/ManageProfiles", icon: <DesktopOutlined /> },
    { name: "Admins", href: "/ManageAdmins", icon: <TransactionOutlined /> },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.list}>
          <Menu mode="inline" className={styles.side}>
            {collapsed ? null : (
              <img
                src="/assets/images/Logo.png"
                alt="logo"
                className={styles.logo}
              />
            )}
            {navLinks.map((link, index) => (
              <Menu.Item key={index} icon={link.icon}>
                <Link href={link.href} className={styles.items}>
                  {link.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div className={styles.ContainerButton}>
          <Button className={styles.logoutButton}>
            <LogoutOutlined />
          </Button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#003366" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default WithAdminRole(AdminLayout);
