import { NavLink } from "react-router-dom";
import s from "./FriendOnlineItem.module.css";

const FriendOnlineItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink className={s.navLink} to={path} >
      <div className={s.wrapper}>
        <img className={s.ava} src={props.ava}></img>
        <div className={s.name}>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default FriendOnlineItem;
