import { useRouteError } from "react-router-dom";

export const FetchError = () => {
  const error = useRouteError();
  console.log(error);
  return <h1>{error}</h1>;
};
