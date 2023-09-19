import { Container, Card, Grid, Typography, Box, Button } from "@mui/material";
import { Navigation } from "../assets/components/Navigation";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Grid container marginTop={6}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <img src="./error.svg" alt="error" style={{ width: "380px" }} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              textAlign={"center"}
              p={1}
              color={"primary"}
            >
              Něco se pokazilo. Stránka nebyla nalezena
            </Typography>
            <Typography variant="body2" textAlign={"center"} p={1}>
              Prosím vrať se prosím na úvodní
              <Button color="error" component={Link} to="/">
                stránku
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
