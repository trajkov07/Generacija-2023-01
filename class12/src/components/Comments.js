import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsAction";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const errorMessage = useSelector(
    (state) => state.CommentsReducer.errorMessage
  );

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  //   let comments = [
  //     {
  //       postId: 1,
  //       id: 2,
  //       name: "quo vero reiciendis velit similique earum",
  //       email: "Jayne_Kuhic@sydney.com",
  //       body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  //     },
  //   ];

  return (
    <div>
      {comments?.map((comment) => {
        return (
          <div key={comment.id}>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
            <hr />
          </div>
        );
      })}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
