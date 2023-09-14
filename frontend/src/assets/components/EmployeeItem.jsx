import { Link } from "react-router-dom";
import { Button, Card, Stack, Typography } from "@mui/material";
export const EmployeeItem = (props) => {
  const id = props.id.toString();
  const fullName = `${props.firstName} ${props.lastName}`;
  return (
    <Card sx={{ marginBottom: "1rem", padding: "1rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={3}
      >
        <Typography variant="body1">{fullName}</Typography>
        <Typography variant="body2">{props.category}</Typography>
        <Link to={id}>detail zaměstnance</Link>
      </Stack>
    </Card>
  );
};
