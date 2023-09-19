import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
export const EmployeeItem = (props) => {
  const id = props.id.toString();
  const fullName = `${props.firstName} ${props.lastName}`;
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography
          variant="h6"
          textTransform={"uppercase"}
          fontWeight={600}
          sx={{ color: "#4B4453" }}
        >
          {fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={id}>
          detail zaměstnance
        </Button>
      </CardActions>
    </Card>
  );
};
