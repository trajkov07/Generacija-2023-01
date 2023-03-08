import { Link, Outlet } from "react-router-dom";

export const BookLayout = () => {
  return (
    <>
      <h1>List of books!</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new" reloadDocument>
        Create New Book
      </Link>
      <Outlet context={{ name: "Harry Potter" }} />
    </>
  );
};
