import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  TwitterOutlined,
  LoginOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useStyles } from "./style/style";
import { useUserActions } from "../../providers/AuthProvider";
import { loginSuccessAction } from "@/providers/AuthProvider/actions";
import {
  ILoginResponse,
  INITIAL_STATE,
} from "@/providers/AuthProvider/context";
import { userReducer } from "@/providers/AuthProvider/reducer";
import { Button, Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useUserActions();
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const encryptedAccessToken = localStorage.getItem(
          "encryptedAccessToken",
        );
        const expireInSeconds_str = localStorage.getItem("expireInSeconds");
        const role = localStorage.getItem("role"); // Retrieve role from local storage
        let expireInSeconds =
          expireInSeconds_str === null
            ? 0
            : Number.parseInt(expireInSeconds_str);

        if (accessToken && encryptedAccessToken && expireInSeconds && role) {
          const payload: ILoginResponse = {
            accessToken,
            encryptedAccessToken,
            expireInSeconds,
            role: role,
          };
          dispatch(loginSuccessAction(payload));
        }
      } catch (error) {
        console.error("Error accessing localStorage: ", error);
      }
    }
  }, []);

  useEffect(() => {
    const accessToken = state.UserLogin?.accessToken;
    const encryptedAccessToken = state.UserLogin?.encryptedAccessToken;
    const expireInSeconds = state.UserLogin?.expireInSeconds;
    const role = state.UserLogin?.role;

    if (typeof window !== "undefined") {
      if (accessToken && encryptedAccessToken && expireInSeconds && role) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("encryptedAccessToken", encryptedAccessToken);
        localStorage.setItem("expireInSeconds", expireInSeconds + "");
        localStorage.setItem("role", role + "");
      }
      // else {
      //   localStorage.clear();
      // }
    }
  }, [state]);

  const navLinks = [
    { name: "Hospitals", href: "/hospitals" },
    { name: "Profiles", href: "/profiles" },
    { name: "About", href: "/about" },
  ];

  const socials = [
    { href: "https://www.facebook.com/", icon: <FacebookFilled /> },
    {
      href: "https://www.linkedin.com/in/tshepo-mahlangu-592970247/",
      icon: <LinkedinFilled />,
    },
    { href: "https://www.instagram.com/", icon: <InstagramFilled /> },
    { href: "", icon: <TwitterOutlined /> },
  ];

  const { styles } = useStyles();

  return (
    <nav>
      <div className={styles.left}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <span className={styles.link}>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className={styles.middle}>
        <Link href="/">
          <img
            src="/assets/images/Logo.png"
            alt="logo"
            style={{ width: "300px" }}
          />
        </Link>
      </div>
      <div className={styles.right}>
        {socials.map((link, index) => (
          <Link href={link.href} key={index}>
            <span className={styles.socialLink}>{link.icon}</span>
          </Link>
        ))}
        {state.UserLogin ? (
          <span className={styles.authButton}>
            <UserOutlined onClick={() => setOpen(true)} />
          </span>
        ) : (
          <Link href="/login">
            <span className={styles.authButton}>
              <LoginOutlined />
            </span>
          </Link>
        )}
        <Drawer
          onClose={() => setOpen(false)}
          open={open}
          style={{ backgroundColor: "#003366" }}
        >
          <div className={styles.drawerItems}>
            <h2>Tshepo</h2>
            <h2>Mahlangu</h2>
            <h2>Tshepo@gmail.com</h2>
            <br />
          </div>
          <div>
            <h4
              className={`${styles.logout} ${styles.logoutHover}`}
              onClick={() => logout()}
            >
              Logout <LogoutOutlined />{" "}
            </h4>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
