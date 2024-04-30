"use client";

import React from "react";
import { useStyles } from "./style/style";
import HospitalComponent from "@/components/hospital";

const Hospitals = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <HospitalComponent />
    </div>
  );
};

export default Hospitals;
