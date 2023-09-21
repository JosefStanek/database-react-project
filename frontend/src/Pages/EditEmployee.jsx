import axios from "axios";
import { EditForm } from "../assets/components/EditForm";
import { useLoaderData, redirect } from "react-router-dom";
export const EditEmployee = () => {
  const data = useLoaderData();
  return <EditForm userData={data} />;
};

export const loader = async ({ params }) => {
  const id = params.id;
  const res = await axios.get("http://localhost:3000/employees/" + id);
  return res.data;
};

export const action = async ({ request, params }) => {
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

  const res = axios.patch("http://localhost:3000/employees/" + id, newData);
  if (!res.ok) {
    console.log(res.status);
  }
  return redirect("/employees");
};
