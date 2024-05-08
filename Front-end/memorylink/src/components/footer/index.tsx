"use client";

import React from "react";
import { useStyles } from "./style/style";

const MainFooter = () => {
  const { styles } = useStyles();

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <h6
        style={{ width: "100%", textAlign: "center" }}
        className={styles.text}
      >
        © {new Date().getFullYear()} MemoryLink All rights reserved.
      </h6>
    </div>
  );
};

export default MainFooter;
