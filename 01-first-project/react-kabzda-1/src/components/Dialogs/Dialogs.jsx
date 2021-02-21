import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Hohlojin" id="1" />
        <DialogItem name="Ded Klop" id="2" />
        <DialogItem name="Petuh" id="3" />
        <DialogItem name="Klop 1" id="4" />
        <DialogItem name="Klop 2" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="How is your react?" />
        <Message message="heeeey?" />
      </div>
    </div>
  );
};

export default Dialogs;
