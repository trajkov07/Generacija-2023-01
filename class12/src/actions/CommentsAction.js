import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../constants/CommentsConstants";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => dispatch(fetchCommentsSuccess(json)))
      .catch((error) => dispatch(fetchCommentsFail(error)));
  };
};
