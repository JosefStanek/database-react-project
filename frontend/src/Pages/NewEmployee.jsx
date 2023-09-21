import axios from "axios";
import { BasicForm } from "../assets/components/BasicForm";
import { redirect } from "react-router-dom";
import uuid from "react-uuid";
export const NewEmployee = () => {
  return <BasicForm />;
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const newData = {
    id: uuid(),
    created: new Date().toISOString(),
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

  const res = axios.post("http://localhost:3000/employees", newData);
  if (!res.ok) {
    console.log(res.status);
  }
  return redirect("/employees");
};
