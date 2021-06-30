import { createStore } from "redux";
import { UserReducer } from "../reducers/User";

let store = createStore(UserReducer);

export default store;
