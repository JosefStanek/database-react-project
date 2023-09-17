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
// import { action as newEmployeeAction } from "./Pages/NewEmployee";
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
            action: async ({ request, params }) => {
              const id = params.id;
              const res = await axios.delete(
                "http://localhost:3000/employees/" + id
              );
              if (!res.ok) {
                console.log("error");
              }
              return redirect("/employees");
            },
          },
          {
            path: ":id/edit",
            element: <EditEmployee />,
            loader: async ({ params }) => {
              const id = params.id;
              const res = await axios.get(
                "http://localhost:3000/employees/" + id
              );
              return res;
            },
            action: async ({ request, params }) => {
              const id = params.id;
              const data = await request.formData();
              const newData = {
                id: new Date().toISOString(),
                firstName: data.get("firstName"),
                lastName: data.get("lastName"),
                photo: data.get("photo"),
                gender: data.get("gender"),
                job: data.get("job"),
                category: data.get("category"),
                city: data.get("city"),
                street: data.get("street"),
                referenceNumber: data.get("referenceNumber"),
                email: data.get("email"),
                phone: +data.get("phone"),
              };

              const res = axios.patch(
                "http://localhost:3000/employees/" + id,
                newData
              );
              if (!res.ok) {
                console.log(res.status);
              }
              return redirect("/employees");
            },
          },
          {
            path: "newEmployee",
            element: <NewEmployee />,
            action: async ({ request }) => {
              const data = await request.formData();
              const newData = {
                id: new Date().toISOString(),
                firstName: data.get("firstName"),
                lastName: data.get("lastName"),
                photo: data.get("photo"),
                gender: data.get("gender"),
                job: data.get("job"),
                category: data.get("category"),
                city: data.get("city"),
                street: data.get("street"),
                referenceNumber: data.get("referenceNumber"),
                email: data.get("email"),
                phone: +data.get("phone"),
              };

              const res = axios.post(
                "http://localhost:3000/employees",
                newData
              );
              if (!res.ok) {
                console.log(res.status);
              }
              return redirect("/employees");
            },
          },
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
