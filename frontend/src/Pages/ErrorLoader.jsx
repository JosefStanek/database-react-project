import { Link, useRouteError } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
export const ErrorLoader = () => {
  const error = useRouteError();
  let message = "něco se pokazilo";
  let status = 400;
  if (error.status === 500) {
    status = error.status;
    message = error.data.message;
  }
  return (
    <>
      <Typography
        variant="h5"
        mt={6}
        textAlign={"center"}
        textTransform={"uppercase"}
        fontWeight={600}
        color={"error"}
      >
        Chyba: {status}
      </Typography>
      <Typography textAlign={"center"}>{message}</Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={2}
      >
        <Button variant="outlined" color="error" component={Link} to="/">
          zpět na hlavní stránku
        </Button>
      </Box>
    </>
  );
};
