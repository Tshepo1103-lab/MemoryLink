"use client";

import React from "react";
import { useStyles } from "./style/style";
import AboutFC from "../../../../components/about/page";

const About = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <AboutFC/>
    </div>
  )
};

export default About;
