import { Stack, Toolbar, Typography, Button, AppBar } from "@mui/material";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <AppBar color="inherit" position="fixed" elevation={1}>
      <Toolbar position="fixed">
        <Typography variant="h6">Logo</Typography>
        <Stack
          direction={"row"}
          marginLeft={"auto"}
          gap={1}
          alignItems={"center"}
        >
          <Link to={""}>Dashboard</Link>
          <Link to={"employees"}>Employees</Link>
          <Link to={"helpdesk"}>Help Desk</Link>
          <Button variant="contained">Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
