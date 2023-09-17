import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./EmployeesNavigation.module.css";
export const EmployeesNavigation = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} spacing={5} m={4}>
      <NavLink
        to={""}
        className={({ isActive }) =>
          isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
        }
        end
      >
        Databáze
      </NavLink>

      <NavLink
        to={"newEmployee"}
        className={({ isActive }) =>
          isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
        }
      >
        Přidat zaměstnance
      </NavLink>
    </Stack>
  );
};
