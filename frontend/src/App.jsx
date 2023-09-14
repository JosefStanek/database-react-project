import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Database } from "./Pages/Database";
import { RootLayout } from "./Pages/RootLayout";
import { Employees } from "./Pages/Employees";
import { EmployeesRootLayout } from "./Pages/EmployeesRootLayout";
import { EmployeeDetail } from "./Pages/EmployeeDetail";
import { NewEmployee } from "./Pages/NewEmployee";
import { HelpDesk } from "./Pages/HelpDesk";
import { ErrorPage } from "./Pages/ErrorPage";
import { loader as EmployeeLoader } from "./Pages/Employees";
import { loader as EmployeeDetailLoader } from "./Pages/EmployeeDetail";
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
          },
          { path: "newEmployee", element: <NewEmployee /> },
        ],
      },
      {
        path: "helpdesk",
        element: <HelpDesk />,
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
