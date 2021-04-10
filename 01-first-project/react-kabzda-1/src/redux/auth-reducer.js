import { stopSubmit } from "redux-form";
import {headerAPI, securityAPI} from "../api/api"

const SET_USER_DATA = 'samuraiJS/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samuraiJS/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};
const authReducer = (state = initialState, action) => {
  
  switch (action.type) { 
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, 
  payload: {captchaUrl} });

export const getAuthUserData = () => {
   return async(dispatch) => {
    const response = await headerAPI.getMe();
        if (response.data.resultCode === 0) {
          const {email, id, login} = response.data.data;
          dispatch(setAuthUserData(email, id, login, true));
        }
   };  
}

export const login = (email, password, rememberMe, captcha) => {
  return async(dispatch) => {  
    const response = await headerAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        } else {
          if (response.data.resultCode === 10) { 
            dispatch(getCaptchaUrl());
          }
          const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
          dispatch(stopSubmit("login", {_error: message}));// actionCreator from redux-form/ is used to stop the submitting of the form)
        }
  }
}

export const getCaptchaUrl = () => {
  return async(dispatch) => {  
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))      
  }
}

export const logout = () => async(dispatch) => {
  const response = await headerAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
