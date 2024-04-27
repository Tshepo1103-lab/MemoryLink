"use client"
import React, { FC, useState } from "react";
import { useUserState } from "../providers/AuthProvider";
import NotFound from "../components/PageNotFound/page";

const WithAdminRole=(WrappedComponent: React.FC<any>) => {

    const RoleComponent: React.FC<any> = (props) => {
        const status= useUserState();
        if (status.UserLogin?.role=='admin') {
            return <WrappedComponent {...props} />;
        } else {
            return (
                <NotFound/>
            )
        }
    };

    return RoleComponent;
};

export default WithAdminRole;