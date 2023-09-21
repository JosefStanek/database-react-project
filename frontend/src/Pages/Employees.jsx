import { json, useRouteLoaderData } from "react-router-dom";
import { Paper, Divider, TextField, Stack, Box } from "@mui/material";
import { EmployeeList } from "../assets/components/EmployeeList";
import { EmployeesFilter } from "../assets/components/EmployeesFilter";
import axios from "axios";
import { useState } from "react";
export const Employees = () => {
  const employeeList = useRouteLoaderData("data");

  const [filteredData, setFilteredData] = useState(employeeList);
  const [search, setSearch] = useState("");

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

  const filterSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Paper elevation={5} sx={{ paddingTop: "0.5rem", marginY: "1rem" }}>
        <Stack
          textAlign={"center"}
          sx={{
            flexDirection: { xs: "row", md: "column" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmployeesFilter filteredHandler={filteredHandler} />
          <TextField
            label={"hledat podle jména"}
            size="small"
            onChange={filterSearchHandler}
          />
        </Stack>
        <Divider sx={{ margin: "1rem" }} />

        <EmployeeList list={filteredData} search={search} />
      </Paper>
    </>
  );
};

export const loader = async () => {
  try {
    const res = await axios.get("http://localhost:3000/employees");
    return res.data;
  } catch (error) {
    throw json(
      {
        message: "Data nemohla být načtena, opakujte prosím pokus později.",
      },
      { status: 500 }
    );
  }
};
