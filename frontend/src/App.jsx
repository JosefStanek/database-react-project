import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import { Database } from "./Pages/Database";
import { RootLayout } from "./Pages/RootLayout";
import { Employees } from "./Pages/Employees";
import { EmployeesRootLayout } from "./Pages/EmployeesRootLayout";
import { EmployeeDetail } from "./Pages/EmployeeDetail";
import { NewEmployee } from "./Pages/NewEmployee";
import { HelpDesk } from "./Pages/HelpDesk";
import { ErrorPage } from "./Pages/ErrorPage";
import { EditEmployee } from "./Pages/EditEmployee";
import { loader as EmployeeLoader } from "./Pages/Employees";
import { loader as EmployeeDetailLoader } from "./Pages/EmployeeDetail";
import { action as newEmployeeAction } from "./Pages/NewEmployee";
import { action as DeleteAction } from "./Pages/EmployeeDetail";
import { loader as EmployeeForEditLoader } from "./Pages/EditEmployee";
import { action as SendMessageAction } from "./Pages/HelpDesk";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Database />,
        loader: EmployeeLoader,
      },
      {
        path: "employees",
        id: "data",
        loader: EmployeeLoader,
        element: <EmployeesRootLayout />,
        children: [
          { index: true, element: <Employees /> },
          {
            path: ":id",
            element: <EmployeeDetail />,
            loader: EmployeeDetailLoader,
            action: DeleteAction,
          },
          {
            path: ":id/edit",
            element: <EditEmployee />,
            loader: EmployeeForEditLoader,
          },
          {
            path: "newEmployee",
            element: <NewEmployee />,
            action: newEmployeeAction,
          },
        ],
      },
      {
        path: "helpdesk",
        element: <HelpDesk />,
        action: SendMessageAction,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <div style={{ height: "57px" }}></div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
