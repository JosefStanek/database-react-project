import { Form, Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Card,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
export const EditForm = ({ userData }) => {
  const id = useParams().id;
  const [gender, setGender] = useState(userData ? userData.gender : "");
  const [category, setCategory] = useState(userData ? userData.category : "");
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Form method="POST">
      <Card elevation={5} sx={{ maxWidth: "600px", margin: "1rem auto" }}>
        <Box display={"flex"} justifyContent={"flex-end"} m={1}>
          <Link to={"/employees/" + id}>
            <IconButton size="large">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Box>

        <Stack
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
          m={2}
        >
          <Box textAlign={"center"} marginX={"auto"} marginY={2}>
            <Avatar
              alt="Remy Sharp"
              src={userData.photo}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="h6">Upravit uživatele</Typography>
        </Stack>

        <Grid container justifyContent={"center"} p={2} gap={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              size="small"
              label={"Jméno"}
              name="firstName"
              fullWidth
              type="text"
              inputProps={{ minLength: 2 }}
              defaultValue={userData.firstName}
              required
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              size="small"
              label={"Příjmení"}
              name="lastName"
              inputProps={{ minLength: 2 }}
              fullWidth
              defaultValue={userData.lastName}
              required
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} p={2} gap={2}>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth size="small" required>
              <InputLabel id="demo-simple-select-label">Pohlaví</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Pohlaví"
                name="gender"
                onChange={genderHandler}
              >
                <MenuItem value={"man"}>Muž</MenuItem>
                <MenuItem value={"women"}>Žena</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small" required>
                <InputLabel id="demo-simple-select-label">Oddělení</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Oddělení"
                  name="category"
                  onChange={categoryHandler}
                >
                  <MenuItem value={"it"}>It</MenuItem>
                  <MenuItem value={"office"}>Office</MenuItem>
                  <MenuItem value={"management"}>Management</MenuItem>
                  <MenuItem value={"other"}>Ostatní</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              size="small"
              label={"Photo (url)"}
              name="photo"
              fullWidth
              inputProps={{ minLength: 8 }}
              defaultValue={userData.photo}
              required
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              label="Pracovní pozice"
              name="job"
              size="small"
              fullWidth
              inputProps={{ minLength: 2 }}
              defaultValue={userData.job}
              required
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} p={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              label="Město"
              name="city"
              fullWidth
              inputProps={{ minLength: 2 }}
              defaultValue={userData.city}
              required
            />
          </Grid>
          <Grid item xs={8} sm={4}>
            <TextField
              size="small"
              label="Ulice"
              name="street"
              fullWidth
              inputProps={{ minLength: 2 }}
              defaultValue={userData.street}
              required
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              size="small"
              label="čp"
              name="referenceNumber"
              fullWidth
              defaultValue={userData.referenceNumber}
              required
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} p={2} spacing={2}>
          <Grid item xs={6} sm={5}>
            <TextField
              size="small"
              label="email"
              name="email"
              fullWidth
              type="email"
              defaultValue={userData.email}
              required
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <TextField
              size="small"
              label="telefon"
              name="phone"
              fullWidth
              inputProps={{ minLength: 9 }}
              defaultValue={userData.phone}
              required
            />
          </Grid>
        </Grid>
        <Stack p={2} m={2}>
          <Button variant="contained" type="submit">
            uložit
          </Button>
        </Stack>
      </Card>
    </Form>
  );
};
