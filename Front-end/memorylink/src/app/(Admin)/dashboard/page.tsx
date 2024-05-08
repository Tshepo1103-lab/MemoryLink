import React from "react";
import DashboardFC from "@/components/dashboardFC";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <DashboardFC />
    </div>
  );
};

export default Dashboard;
