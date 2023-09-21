import axios from "axios";
import { Link, useLoaderData, useSubmit, redirect } from "react-router-dom";
import {
  Card,
  Button,
  Typography,
  Stack,
  Avatar,
  Box,
  Grid,
  Icon,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneAndroidSharpIcon from "@mui/icons-material/PhoneAndroidSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import { useState } from "react";
export const EmployeeDetail = () => {
  const [open, setOpen] = useState(false);
  const submit = useSubmit();

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpen(false);
    submit(null, { method: "delete" });
  };

  const data = useLoaderData();
  const fullName = `${data.firstName} ${data.lastName}`;
  const job = data.job;
  let border = "";
  let color = "";
  if (data.gender === "women") {
    border = "3px solid #f73378";
    color = "#f73378";
  } else {
    border = "3px solid #2196f3";
    color = "#2196f3";
  }

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Upozornění"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Opravdu chceš smazat tohoto uživatele?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>zpět</Button>
            <Button
              onClick={handleCloseDelete}
              variant="contained"
              color="error"
            >
              smazat
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={6}>
          <Card elevation={6}>
            <Grid item xs={12}>
              <Box display={"flex"} justifyContent={"flex-end"} m={1}>
                <Link to={"/employees"}>
                  <IconButton size="large">
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
              </Box>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2rem",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={data.photo}
                sx={{
                  width: "150px",
                  height: "150px",
                  border: { border },
                }}
              />
            </Box>
            <Grid item xs={12}>
              <Typography variant="h6" textAlign={"center"}>
                {fullName}
              </Typography>
              <Typography
                sx={{ color: color }}
                variant="body1"
                textAlign={"center"}
                textTransform={"uppercase"}
                m={1}
              >
                {job}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={5}>
              <Box display={"flex"} gap={1} pl={"10%"} pb={2}>
                <Icon sx={{ color: { color } }}>
                  <PhoneAndroidSharpIcon />
                </Icon>
                <Typography variant="body1">{data.phone}</Typography>
              </Box>
              <Box display={"flex"} gap={1} pl={"10%"} pb={2}>
                <Icon sx={{ color: { color } }}>
                  <EmailSharpIcon />
                </Icon>
                <Typography variant="body1">{data.email}</Typography>
              </Box>
              <Box display={"flex"} gap={1} pl={"10%"} pb={2}>
                <Icon sx={{ color: { color } }}>
                  <PlaceSharpIcon />
                </Icon>
                <Typography variant="body1">{`${data.city}, ${data.street} ${data.referenceNumber}`}</Typography>
              </Box>
            </Grid>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              spacing={5}
              mb={5}
            >
              <Button component={Link} to={`edit`}>
                upravit
              </Button>
              <Button color="error" onClick={() => setOpen(true)}>
                smazat
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export const loader = async ({ params }) => {
  const id = params.id;
  const res = await axios.get("http://localhost:3000/employees/" + id);
  return res.data;
};

export const action = async ({ request, params }) => {
  const id = params.id;
  const res = await axios.delete("http://localhost:3000/employees/" + id);
  if (!res.ok) {
    console.log("error");
  }
  return redirect("/employees");
};
