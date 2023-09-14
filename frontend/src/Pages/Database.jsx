import { Card, Grid, Typography, Stack, Divider, Box } from "@mui/material";
import { GraphyEmployee } from "../assets/components/UI/GraphEmployee";
import { useLoaderData } from "react-router-dom";

export const Database = () => {
  const data = useLoaderData();
  const employeeLength = data.length;
  return (
    <>
      <Grid container gap={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            Statistika firmy
          </Typography>
        </Grid>

        <Grid item xs={5} md={6}>
          <Card sx={{ padding: "1rem" }} elevation={5}>
            <Typography variant="h6" textAlign={"center"}>
              Počet zaměstnanců
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              spacing={2}
              alignContent={"center"}
            >
              <Typography variant="h6">{employeeLength}</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card sx={{ padding: "1rem" }} elevation={5}>
            <Typography variant="h6" textAlign={"center"}>
              Pohlaví
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              spacing={2}
              alignContent={"center"}
            >
              <Typography variant="h6">57 mužů</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h6">57 žen</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={5}>
            <Stack direction={"column"} justifyContent={"center"}>
              <GraphyEmployee />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Typography variant="body1" color={"#0088FE"}>
                  IT
                </Typography>
                <Typography variant="body1" color={"#00C49F"}>
                  OFFICE
                </Typography>
                <Typography variant="body1" color={"#FFBB28"}>
                  MANAGEMENT
                </Typography>
                <Typography variant="body1" color={"#FF8042"}>
                  OSTATNÍ
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quod illum at! Quos, non cum error rerum explicabo
              quasi dolores quam, dolorum unde molestiae at voluptate itaque
              aliquam facere veritatis omnis illum odit similique nostrum
              obcaecati nobis! Reprehenderit, magnam perspiciatis?
            </p>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
