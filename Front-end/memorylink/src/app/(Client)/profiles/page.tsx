"use client";

import React from "react";
import { useStyles } from "./style/style";
import ProfilesFC from "@/components/profiles";

const Profiles = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <ProfilesFC />
    </div>
  );
};
export default Profiles;
