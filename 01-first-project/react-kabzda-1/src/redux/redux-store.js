import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navBarReducer,
   usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;