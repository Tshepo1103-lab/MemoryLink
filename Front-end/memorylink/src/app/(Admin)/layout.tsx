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
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useStyles } from "./style";
import { getrole } from "@/utils/decoder/decoder";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { logout } = useUserActions();
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();
  const [_role, setRole] = useState("");
  const { push } = useRouter();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <PieChartOutlined /> },
    { name: "Finder", href: "/find", icon: <SearchOutlined /> },
  ];

  useEffect(() => {
    const role: string = localStorage?.getItem("accessToken");
    setRole(role);
  }, []);

  const handleclick = () => {
    push(`/admin`);
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={70}
      >
        <div className={styles.list}>
          <Menu mode="inline" className={styles.side}>
            {collapsed ? null : (
              <img
                src="/assets/images/Logo2.png"
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
                <Button
                  href={link.href}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  {link.name}
                </Button>
              </Menu.Item>
            ))}
            <Menu.Item
              key="3"
              className={styles.items}
              icon={<DesktopOutlined />}
              style={{ color: "#fff", marginLeft: "15px" }}
            >
              <Button
                className={styles.items}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#fff",
                }}
                onClick={handleclick}
              >
                Profiles
              </Button>
            </Menu.Item>
            {_role == "admin" ? null : (
              <>
                <Menu.Item
                  key="4"
                  className={styles.items}
                  icon={<DesktopOutlined />}
                  style={{ color: "#fff", marginLeft: "15px" }}
                >
                  <Button
                    href="/managehospitals"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Hospitals
                  </Button>
                </Menu.Item>
                <Menu.Item
                  key="5"
                  className={styles.items}
                  icon={<DesktopOutlined />}
                  style={{ color: "#fff", marginLeft: "15px" }}
                >
                  <Button
                    href="/admins"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    admins
                  </Button>
                </Menu.Item>
              </>
            )}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "#003366",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
          <Link href="/login">
            <LogoutOutlined
              className={styles.logoutButton}
              onClick={() => logout()}
            />
          </Link>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
