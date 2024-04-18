
import { createAction } from "../../utils/reducers/reducers.utils";
import { USER_ACTIONS_TYPES } from "./user.types";

export const setCurrentUser = (user) => 
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);