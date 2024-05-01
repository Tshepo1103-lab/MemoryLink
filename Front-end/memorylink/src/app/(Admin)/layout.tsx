"use client";

import {
  DesktopOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SearchOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import WithAdminRole from "./../../hoc/withRole";
import { useStyles } from "./style";
import WithRole from "./../../hoc/withRole";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <PieChartOutlined /> },
    { name: "Hospitals", href: "/managehospitals", icon: <DesktopOutlined /> },
    { name: "Profiles", href: "/manageprofiles", icon: <DesktopOutlined /> },
    { name: "Admins", href: "/admins", icon: <TransactionOutlined /> },
    { name: "Finder", href: "/find", icon: <SearchOutlined /> },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={70}
      >
        <div className={styles.list}>
          <Menu
            mode="inline"
            className={styles.side}
            defaultSelectedKeys={["0"]}
          >
            {collapsed ? null : (
              <img
                src="/assets/images/Logo.png"
                alt="logo"
                className={styles.logo}
              />
            )}
            {navLinks.map((link, index) => (
              <Menu.Item
                key={index}
                icon={link.icon}
                style={{ color: "#fff", marginLeft: "15px" }}
              >
                <Link href={link.href} className={styles.items}>
                  {link.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#003366", color: "#fff" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
          <LogoutOutlined className={styles.logoutButton} />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default WithRole(AdminLayout);
