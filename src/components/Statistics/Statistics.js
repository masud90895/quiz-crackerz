import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const statisticsData = useLoaderData();
  const datas =statisticsData.data;
  
  return (
      <LineChart
      className="mx-auto mt-10"
        width={600}
        height={300}
        data={datas}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

  );
};

export default Statistics;
