import { Stack, Button, Box, TextField } from "@mui/material";
import { useState } from "react";
export const EmployeesFilter = (props) => {
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
        mt={4}
        p={1}
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
      {/* <Box textAlign={"center"} mt={2}>
        <TextField label={"hledat podle jména"} size="small" />
      </Box> */}
    </>
  );
};
