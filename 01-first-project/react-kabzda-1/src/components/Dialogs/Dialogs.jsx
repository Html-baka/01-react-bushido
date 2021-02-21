import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Hohlojin</NavLink>
        </div>

        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Ded Klop</NavLink>
        </div>

        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Petuh</NavLink>
        </div>

        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Klop 1</NavLink>
        </div>

        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Klop 2</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your react?</div>
        <div className={s.message}>heeeey?</div>
      </div>
    </div>
  );
};

export default Dialogs;
