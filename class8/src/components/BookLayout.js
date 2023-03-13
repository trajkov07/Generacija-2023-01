import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 0 });
  // const [number, setNumber] = useState(0);
  console.log(searchParams);
  const number = searchParams.get("n");
  const name = searchParams.get("name");
  console.log(name);
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
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <Outlet context={{ name: "Harry Potter" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};
