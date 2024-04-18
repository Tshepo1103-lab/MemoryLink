import Link from 'next/link';
import React from 'react';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';

const Navbar = () => {

  const navLinks = [
    { name: "Hospitals", href: "/hospitals" },
    { name: "Profiles", href: "/profiles" },
    { name: "About", href: "/about"},
  ];

  const socials = [
    { href: "https://www.facebook.com/", icon: <FacebookOutlined/> },
    { href: "https://www.linkedin.com/in/tshepo-mahlangu-592970247/", icon: <LinkedinOutlined/> },
    { href: "https://www.instagram.com/", icon: <InstagramOutlined/> },
    { href: "", icon: <TwitterOutlined/> }
  ]

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
        <img src='/assets/images/Logo.png' alt='logo' style={{width:"300px"}}/>
      </div>
      <div className={styles.right}>
        {socials.map((link,index) => (
          <Link href={link.href} key={index}>
            <span className={styles.socialLink}>{link.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;