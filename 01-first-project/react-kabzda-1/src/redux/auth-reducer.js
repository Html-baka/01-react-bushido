import { stopSubmit } from "redux-form";
import {headerAPI} from "../api/api"

const SET_USER_DATA = 'samuraiJS/auth/SET_USER_DATA';

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false
};
const authReducer = (state = initialState, action) => {
  
  switch (action.type) { 
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login, isAuth) => ({ type: SET_USER_DATA, 
  payload: {email, userId, login, isAuth} });

export const getAuthUserData = () => {
   return async(dispatch) => {
    let response = await headerAPI.getMe();
        if (response.data.resultCode === 0) {
          let {email, id, login} = response.data.data;
          dispatch(setAuthUserData(email, id, login, true));
        }
   };  
}

export const login = (email, password, rememberMe) => {
  return async(dispatch) => {  
   let response = await headerAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
          dispatch(stopSubmit("login", {_error: message}));// actionCreator from redux-form/ is used to stop the submitting of the form)
        }
  }
}

export const logout = () => async(dispatch) => {
 let response = await headerAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
