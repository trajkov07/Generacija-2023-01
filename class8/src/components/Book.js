import { useParams } from "react-router-dom";

export const Book = () => {
  const { id } = useParams();
  console.log(id);

  return <h1>Book {id}</h1>;
};
