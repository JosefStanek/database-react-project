import { Form } from "react-router-dom";
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
  Icon,
} from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useState } from "react";
export const BasicForm = () => {
  // const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Form method="POST">
      <Card elevation={5} sx={{ maxWidth: "600px", margin: "1rem auto" }}>
        <Stack
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
          m={2}
        >
          <div>
            <AccountCircleSharpIcon
              sx={{ width: "100px", height: "100px" }}
              color="primary"
            />
          </div>
          <Typography variant="h6">Nový uživatel</Typography>
        </Stack>

        <Grid container justifyContent={"center"} p={2} gap={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              size="small"
              label={"Jméno"}
              name="firstName"
              sx={{ width: "100%" }}
              type="text"
              inputProps={{ minLength: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              size="small"
              label={"Příjmení"}
              name="lastName"
              sx={{ width: "100%" }}
              inputProps={{ minLength: 2 }}
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
              sx={{ width: "100%" }}
              inputProps={{ minLength: 8 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              label="Pracovní pozice"
              name="job"
              size="small"
              sx={{ width: "100%" }}
              inputProps={{ minLength: 2 }}
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
              sx={{ width: "100%" }}
              inputProps={{ minLength: 2 }}
              required
            />
          </Grid>
          <Grid item xs={8} sm={4}>
            <TextField
              size="small"
              label="Ulice"
              name="street"
              sx={{ width: "100%" }}
              inputProps={{ minLength: 2 }}
              required
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              size="small"
              label="čp"
              name="referenceNumber"
              sx={{ width: "100%" }}
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
              sx={{ width: "100%" }}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <TextField
              size="small"
              label="telefon"
              name="phone"
              sx={{ width: "100%" }}
              inputProps={{ minLength: 9 }}
              required
            />
          </Grid>
        </Grid>
        <Stack p={2} m={2}>
          <Button variant="contained" type="submit">
            odeslat
          </Button>
        </Stack>
      </Card>
    </Form>
  );
};
