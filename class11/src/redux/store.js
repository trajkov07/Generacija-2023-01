import { createStore } from "redux";
import { balanceReducer } from "./reducers/balanceReducer";

const store = createStore(balanceReducer);

export default store;
