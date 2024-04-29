"use client";
import React, { FC, useState } from "react";
import { useUserState } from "../providers/AuthProvider";

const WithRole = (WrappedComponent: React.FC<any>) => {
  const RoleComponent: React.FC<any> = (props) => {
    const status = useUserState();
    if (status.UserLogin?.role) {
      // If authenticated, render the wrapped component with props
      return <WrappedComponent {...props} />;
    } else {
      // If not authenticated, render a message or a redirection
      return <h2>You are not authorized to view this page</h2>;
    }
  };

  return RoleComponent;
};

export default WithRole;
