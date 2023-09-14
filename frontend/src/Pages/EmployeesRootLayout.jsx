import { Outlet } from "react-router-dom";
import { EmployeesNavigation } from "../assets/components/EmployeesNavigation";
export const EmployeesRootLayout = () => {
  return (
    <>
      <EmployeesNavigation />
      <Outlet />
    </>
  );
};
