import {headerAPI} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA';

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
  return (dispatch) => {
    headerAPI.getMe().then( response => {
      if (response.data.resultCode === 0) {
         let {email, id, login} = response.data.data;
         dispatch(setAuthUserData(email, id, login, true));
      }
   });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    headerAPI.login(email, password, rememberMe)
      .then( response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
   });
  }
}

export const logout = () => (dispatch) => {
    headerAPI.logout()
      .then( response => {
        if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false));
        }
   });
  }

export default authReducer;
