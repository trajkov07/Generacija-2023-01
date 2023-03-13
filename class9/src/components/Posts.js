import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  // empty array [] means call useEffect only on the begining
  useEffect(() => {
    fetch(`${API_URL}posts`)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => {
        alert(err);
        setErrorMessage(true);
      });
  }, []);

  return (
    <div>
      <h1>Posts!</h1>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <p>Id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading posts</h2>
      )}
      {errorMessage && <h1>There was a problem with the API</h1>}
    </div>
  );
};
