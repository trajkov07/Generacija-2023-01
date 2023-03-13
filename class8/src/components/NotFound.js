import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const NotFound = () => {
  // return <Navigate to="/" />;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-2);
    }, 2000);
  });

  return <h1>The page your are looking for can not be found</h1>;
};
