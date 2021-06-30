import store from "../boot/store";
import { USER_NAME } from "./actionTypes";

export function setUsername(username: string) {
    store.dispatch({
        type: USER_NAME,
        payload: username,
    });
}

export function getUsername() {
    return store.getState().username;
}
