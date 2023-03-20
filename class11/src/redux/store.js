// import { applyMiddleware, createStore } from "redux";
import { balanceReducer } from "./reducers/balanceReducer";
import { creditReducer } from "./reducers/creditRatingReducer";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

// const store = createStore(balanceReducer, applyMiddleware(thunk));
let reducers = combineReducers({
  balanceReducer,
  creditReducer,
});
// const store = configureStore({ reducer: balanceReducer });
const store = configureStore({ reducer: reducers });

export default store;
