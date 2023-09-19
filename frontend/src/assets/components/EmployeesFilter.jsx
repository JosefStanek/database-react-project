import { Stack, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
export const EmployeesFilter = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (attr) => {
    filteredHandler(attr);
    setAnchorEl(null);
  };
  const filteredHandler = (type) => {
    props.filteredHandler(type);
  };

  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        textAlign={"center"}
        justifyContent={"center "}
        m={2}
        p={1}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            filteredHandler("all");
          }}
        >
          Všichni
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            filteredHandler("it");
          }}
        >
          it
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            filteredHandler("office");
          }}
        >
          office
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            filteredHandler("management");
          }}
        >
          management
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            filteredHandler("other");
          }}
        >
          ostatní
        </Button>
      </Stack>

      <Stack
        textAlign={"center"}
        m={2}
        p={1}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size="small"
          variant="contained"
        >
          FILTR
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose("all")}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={() => handleClose("all")}>VŠICHNI</MenuItem>
          <MenuItem onClick={() => handleClose("it")}>IT</MenuItem>
          <MenuItem onClick={() => handleClose("office")}>OFFICE</MenuItem>
          <MenuItem onClick={() => handleClose("management")}>
            MANAGEMENT
          </MenuItem>
          <MenuItem onClick={() => handleClose("other")}>OSTATNÍ</MenuItem>
        </Menu>
      </Stack>
    </>
  );
};
