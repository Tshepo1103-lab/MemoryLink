"use client";
import React, { FC, useState } from "react";
import { useUserState } from "../providers/AuthProvider";

const WithRole = (WrappedComponent: React.FC<any>) => {
  const RoleComponent: React.FC<any> = (props) => {
    const status = useUserState();
    if (status.UserLogin?.accessToken) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div style={{ height: "66vh", margin: "100px" }}>
          <h2>You are not authorized to view this page, Login to view</h2>
        </div>
      );
    }
  };

  return RoleComponent;
};

export default WithRole;
