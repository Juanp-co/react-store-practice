import { USER_ACTIONS_TYPES } from "../../contexts/user.context";
import { createAction } from "../../utils/reducers/reducers.utils";

export const setCurrentUser = (user) => 
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);