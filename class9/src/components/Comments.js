import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { getComments } from "../services/commentsService";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     fetch(`${API_URL}comments`)
  //       .then((res) => res.json())
  //       .then((json) => setComments(json))
  //       .catch((err) => alert(err));
  //   }, []);
  useEffect(() => {
    getComments().then((json) => setComments(json));
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <span>Id: {comment.id}</span>
                <p>Name: {comment.name}</p>
                <Link to={"/comment/" + comment.id}>Details...</Link>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Comments Loading!</div>
      )}
    </div>
  );
};
