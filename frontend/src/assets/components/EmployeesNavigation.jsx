import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const EmployeesNavigation = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} spacing={5} m={4}>
      <Link to={""}>Databáze</Link>

      <Link to={"newEmployee"}>Přidat zaměstnance</Link>
    </Stack>
  );
};
