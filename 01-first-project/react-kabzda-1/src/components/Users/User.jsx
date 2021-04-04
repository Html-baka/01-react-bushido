import React from "react";
import s from "./users.module.css";
import user_undefined from "../../assets/images/user_undefined.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = ({user, followingInProgress, follow, unfollow}) => {
  return (
        <div >
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : user_undefined}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed 
              ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                unfollow(user.id);
                   
              }}>Unfollow</button>
               : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id)
              }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
 )}


export default Users;
