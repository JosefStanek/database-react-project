import {
  Stack,
  Toolbar,
  Button,
  AppBar,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";
export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          sx={{ display: { xs: "none", sm: "inline" } }}
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
          <Button variant="contained">Logout</Button>
        </Stack>
        <IconButton
          sx={{
            display: { xs: "inline", sm: "none" },
            marginLeft: { xs: "auto", sm: "0rem" },
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack p={2} width={"250px"} gap={1}>
          <Box textAlign={"center"} color={"#1976d2"}>
            <DashboardIcon />
          </Box>
          <Button
            component={NavLink}
            to=""
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Dashboard
          </Button>
          <Button
            component={NavLink}
            to="employees"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Zaměstnanci
          </Button>
          <Button
            component={NavLink}
            to="helpdesk"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Help Desk
          </Button>
          <Button variant="contained">Logout</Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
};
