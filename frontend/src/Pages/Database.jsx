import { Card, Grid, Typography, Stack, Divider } from "@mui/material";
import { GraphyEmployee } from "../assets/components/UI/GraphEmployee";
import { useLoaderData } from "react-router-dom";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { TimeGraph } from "../assets/components/UI/TimeGraph";
export const Database = () => {
  const data = useLoaderData();
  const employeeLength = data.length;
  const womenFilter = data.filter((item) => {
    return item.gender === "women";
  });
  const manFilter = data.filter((item) => {
    return item.gender === "man";
  });

  const mainBranch = data.filter((item) => {
    return item.city.toLowerCase() === "praha";
  });

  return (
    <>
      <Grid container gap={2} justifyContent={"center"} mb={4}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h4"
            textAlign={"center"}
            textTransform={"uppercase"}
            p={4}
            m={1}
            color={"primary"}
          >
            Dashboard
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} alignSelf={"center"}>
          <Stack spacing={2}>
            <Card sx={{ padding: "1.7rem" }} elevation={5}>
              <Typography
                variant="body2"
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                počet zaměstnanců
              </Typography>
              <Typography
                variant="h4"
                textAlign={"center"}
                p={1}
                fontWeight={700}
              >
                {employeeLength}
              </Typography>
              <Divider variant="middle" />
              <Stack
                direction={"row"}
                justifyContent={"center"}
                spacing={2}
                alignContent={"center"}
                alignItems={"center"}
                p={2}
              >
                <MaleIcon color="primary" />
                <span>{manFilter.length}</span>

                <Divider orientation="vertical" variant="middle" flexItem />

                <FemaleIcon color="error" />
                <span>{womenFilter.length}</span>
              </Stack>
            </Card>
            <Card sx={{ padding: "1rem" }} elevation={5}>
              <Typography
                variant="body2"
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                počet zaměstnanců
              </Typography>
              <Typography
                variant="body2"
                textAlign={"center"}
                textTransform={"uppercase"}
                mb={2}
              >
                centrála praha
              </Typography>
              <Divider />
              <Typography
                variant="h4"
                textAlign={"center"}
                textTransform={"uppercase"}
                mt={2}
                color={"primary"}
                fontWeight={700}
              >
                {mainBranch.length}
              </Typography>
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={5}>
            <Stack direction={"column"} justifyContent={"center"}>
              <GraphyEmployee data={data} />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={9.15}>
          <Card elevation={5}>
            <TimeGraph data={data} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
