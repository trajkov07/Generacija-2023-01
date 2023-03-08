import { useParams, Link, useOutletContext } from "react-router-dom";

export const Book = () => {
  const { id } = useParams();
  const object = useOutletContext();
  console.log(object);

  return (
    <div>
      {/* <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">Create New Book</Link> */}
      <h1>
        Book {id} - {object.name}
      </h1>
    </div>
  );
};
