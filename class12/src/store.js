import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducer";

// with latest version we can combine reducers this way
// no need to use combineReducers
const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
};

export default configureStore({
  reducer: reducer,
});
