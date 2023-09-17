import { Stack, Toolbar, Typography, Button, AppBar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <AppBar color="inherit" position="fixed" elevation={1}>
      <Toolbar position="fixed">
        <img
          src="./public/logo.png"
          alt=""
          style={{ width: "30px", height: "30px" }}
        />
        <Stack
          direction={"row"}
          marginLeft={"auto"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive
                ? `${classes.navLink} ${classes.active}`
                : classes.navLink
            }
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"employees"}
            className={({ isActive }) =>
              isActive
                ? `${classes.navLink} ${classes.active}`
                : classes.navLink
            }
          >
            Zaměstnanci
          </NavLink>
          <NavLink
            to={"helpdesk"}
            className={({ isActive }) =>
              isActive
                ? `${classes.navLink} ${classes.active}`
                : classes.navLink
            }
          >
            Help Desk
          </NavLink>
          <Button>Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
