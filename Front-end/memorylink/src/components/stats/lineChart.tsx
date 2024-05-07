import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  { year: 2023, month: "Jan", incidents: 10 },
  { year: 2023, month: "Feb", incidents: 20 },
  { year: 2023, month: "Mar", incidents: 15 },
  { year: 2023, month: "Apr", incidents: 25 },
  { year: 2023, month: "May", incidents: 30 },
  { year: 2023, month: "Jun", incidents: 18 },
  { year: 2023, month: "Jul", incidents: 22 },
];

const getPath = (x:any, y:any, width:any, height:any) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props:any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = () => {
  return (
    <>
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <Bar
          dataKey="incidents"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default CustomShapeBarChart;
