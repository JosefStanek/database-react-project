import { useRouteLoaderData } from "react-router-dom";
import { Button, Paper, Stack, Divider, TextField, Box } from "@mui/material";
import { EmployeeList } from "../assets/components/EmployeeList";
import { EmployeesFilter } from "../assets/components/EmployeesFilter";
import { useState } from "react";

export const Employees = () => {
  const employeeList = useRouteLoaderData("data");

  const [filteredData, setFilteredData] = useState(employeeList);
  // const [search, setSearch] = useState("");

  const filteredHandler = (type) => {
    if (type === "all") {
      setFilteredData(employeeList);
    } else {
      const filteredEmployee = employeeList.filter((employee) => {
        return employee.category === type;
      });
      setFilteredData(filteredEmployee);
    }
  };

  // const filterSearchHandler = (e) => {
  //   setSearch(e.target.value);
  // };
  return (
    <>
      <Paper elevation={5} sx={{ paddingTop: "0.5rem", marginTop: "1rem" }}>
        <EmployeesFilter filteredHandler={filteredHandler} />
        <Box textAlign={"center"} mt={2}>
          <TextField label={"hledat podle jména"} size="small" />
        </Box>
        <Divider sx={{ margin: "1rem" }} />

        <EmployeeList list={filteredData} />
      </Paper>
    </>
  );
};

export const loader = async () => {
  const res = await fetch("http://localhost:3000/employees");
  if (!res.ok) {
    console.log("Data is not ok");
  }

  return res;
};
