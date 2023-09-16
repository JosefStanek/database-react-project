import { EditForm } from "../assets/components/EditForm";
import { useLoaderData } from "react-router-dom";
export const EditEmployee = () => {
  const data = useLoaderData();
  return <EditForm userData={data.data} />;
};
