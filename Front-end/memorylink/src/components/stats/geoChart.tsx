import React from "react";
import { Chart } from "react-google-charts";

const GeoChart = () => {
  const data = [
    ["Country", "Affected"],
    ["South Africa", 100],

    // Add more countries as needed
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="GeoChart"
        data={data}
        options={{
          region: "002", // Specify Africa as the region
          displayMode: "ZA",
          colorAxis: { colors: ["lightgray", "red"] }, // Change the color to red for affected areas
          backgroundColor: "#f0f0f0",
          datalessRegionColor: "#cccccc",
          defaultColor: "#f5f5f5",
          tooltip: { textStyle: { color: "#444444" }, trigger: "none" },
        }}
      />
    </div>
  );
};

export default GeoChart;
