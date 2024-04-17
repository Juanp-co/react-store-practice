import { createContext, useState, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {

  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTIONS_TYPES.SET_CURRENT_USER, payload: user });
  }

  //const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
