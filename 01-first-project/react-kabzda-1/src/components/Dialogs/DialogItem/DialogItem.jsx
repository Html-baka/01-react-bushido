import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink className={s.linkWrapper} to={path}>
        <img className={s.dialogAva} src={props.ava}></img>
        <div>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
