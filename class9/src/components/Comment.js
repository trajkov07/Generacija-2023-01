import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const Comment = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState(undefined);
  console.log(comment);

  useEffect(() => {
    fetch(`${API_URL}comments/${commentId}`)
      .then((res) => res.json())
      .then((element) => setComment(element));
  }, [commentId]);

  return (
    comment && (
      <div>
        <p>ID: {comment.id}</p>
        <p>Name: {comment.name}</p>
        <p>Email: {comment.email}</p>
        <p>Body: {comment.body}</p>
      </div>
    )
  );
};
