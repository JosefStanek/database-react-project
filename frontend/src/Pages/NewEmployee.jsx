import { BasicForm } from "../assets/components/BasicForm";
import { redirect } from "react-router-dom";
export const NewEmployee = () => {
  return <BasicForm />;
};

// export async function action({ request, params }) {
//   const data = request.formData();
//   const newData = {
//     id: new Date().toISOString(),
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     photo: data.get("photo"),
//     gender: data.get("gender"),
//     job: data.get("job"),
//     category: data.get("category"),
//     city: data.get("city"),
//     street: data.get("street"),
//     referenceNumber: data.get("referenceNumber"),
//     email: data.get("email"),
//     phone: +data.get("phone"),
//   };
//   console.log(newData);
//   // const res = await fetch("http://localhost:3000/employees", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(newData),
//   // });

//   // if (!res.ok) {
//   //   console.log("error");
//   // }
// }
