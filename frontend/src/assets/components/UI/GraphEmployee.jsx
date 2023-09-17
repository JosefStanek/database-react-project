import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

export const GraphyEmployee = (props) => {
  const manInIt = props.data.filter((item) => {
    return item.gender === "man" && item.category === "it";
  });
  const womanInIt = props.data.filter((item) => {
    return item.gender === "women" && item.category === "it";
  });

  const manInOffice = props.data.filter((item) => {
    return item.gender === "man" && item.category === "office";
  });
  const womenInOffice = props.data.filter((item) => {
    return item.gender === "women" && item.category === "office";
  });

  const manInManagement = props.data.filter((item) => {
    return item.gender === "man" && item.category === "management";
  });
  const womenInManagement = props.data.filter((item) => {
    return item.gender === "women" && item.category === "management";
  });

  const manInOther = props.data.filter((item) => {
    return item.gender === "man" && item.category === "other";
  });

  const womenInOther = props.data.filter((item) => {
    return item.gender === "women" && item.category === "other";
  });

  const data = [
    {
      name: "IT",
      muži: manInIt.length,
      ženy: womanInIt.length,
      amt: 100,
    },
    {
      name: "OFFICE",
      muži: manInOffice.length,
      ženy: womenInOffice.length,
      amt: 100,
    },
    {
      name: "MANAGEMENT",
      muži: manInManagement.length,
      ženy: womenInManagement.length,
      amt: 100,
    },
    {
      name: "OSTATNÍ",
      muži: manInOther.length,
      ženy: womenInOther.length,
      amt: 100,
    },
  ];
  return (
    <>
      <Typography textAlign={"center"} p={2} textTransform={"uppercase"}>
        Celkové rozložení - podle oddělení
      </Typography>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="ženy" fill="#f73378" />
            <Bar dataKey="muži" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
