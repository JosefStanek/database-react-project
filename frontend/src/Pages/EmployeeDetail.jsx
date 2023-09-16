import { Link, useParams, useLoaderData } from "react-router-dom";
import {
  Card,
  Paper,
  Button,
  Typography,
  Stack,
  Avatar,
  Box,
  Grid,
  Icon,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneAndroidSharpIcon from "@mui/icons-material/PhoneAndroidSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
export const EmployeeDetail = () => {
  const data = useLoaderData();
  const fullName = `${data.firstName} ${data.lastName}`;
  const job = data.job;
  let border;
  let color;
  if (data.gender === "women") {
    border = "3px solid #f73378";
    color = "#f73378";
  } else {
    border = "3px solid #2196f3";
    color = "#2196f3";
  }
  return (
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
          <Stack direction={"row"} justifyContent={"center"} spacing={5} mb={5}>
            <Button>
              <Link to={`edit`}>upravit</Link>
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export async function loader({ params }) {
  const id = params.id;
  const res = await fetch("http://localhost:3000/employees/" + id);
  return res;
}
