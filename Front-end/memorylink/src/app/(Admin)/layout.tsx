"use client";

import { useUserActions } from "@/providers/AuthProvider";
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
import React, { PropsWithChildren, useState } from "react";
import { useStyles } from "./style";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { logout } = useUserActions();
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
            // defaultSelectedKeys={["0"]}
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
                className={styles.items}
                icon={link.icon}
                style={{ color: "#fff", marginLeft: "15px" }}
              >
                  <Button href={link.href} style={{backgroundColor:'transparent', border:'none'}}>{link.name}</Button>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#003366", color: "#fff",display:'flex',justifyContent:'space-between' }}>
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
          <LogoutOutlined className={styles.logoutButton} onClick={() => logout()}/>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
