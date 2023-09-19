import { Grid } from "@mui/material";
import { EmployeeItem } from "./EmployeeItem";
export const EmployeeList = (props) => {
  const EmployeeList = props.list
    .filter((item) => {
      return props.filter.toLowerCase() === ""
        ? item
        : item.firstName.toLowerCase().includes(props.filter);
    })
    .map((employee) => (
      <Grid item xs={12} md={6} lg={4} key={employee.id}>
        <EmployeeItem
          id={employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          category={employee.category}
        />
      </Grid>
    ));
  return (
    <Grid container spacing={4} p={2}>
      {EmployeeList}
    </Grid>
  );
};
