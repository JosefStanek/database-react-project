import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

export const TimeGraph = (props) => {
  const timeFilter = props.data.map((item) => {
    return new Date(item.created).getFullYear();
  });

  const count = {};

  for (const num of timeFilter) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  const result = Object.keys(count).map((key) => ({
    name: key.toString(),
    zaměstnanci: count[key],
    amt: 100,
  }));

  return (
    <>
      <Typography textAlign={"center"} p={2} textTransform={"uppercase"}>
        Časová zóna - přijetí zaměstnanců
      </Typography>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={result}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="zaměstnanci"
              stroke="#1976d2"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
