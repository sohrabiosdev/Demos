import { USER_NAME } from "../actions/actionTypes";

const INITIAL_STATE = {
    username: "",
}

export function UserReducer(state = INITIAL_STATE, action: any) {
    switch ( action.type ) {
        case USER_NAME:
           return {...state, username: action.payload};

        default:
            return state;
    }
}
