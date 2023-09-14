import { Outlet } from "react-router-dom";
import { Navigation } from "../assets/components/Navigation";
import { Container } from "@mui/material";
export const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
