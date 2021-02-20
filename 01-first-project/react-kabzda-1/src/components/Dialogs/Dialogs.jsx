import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Hohlojin</div>

        <div className={s.dialog}>Ded Klop</div>

        <div className={s.dialog}>Petuh</div>

        <div className={s.dialog}>Klop 1</div>

        <div className={s.dialog}>Klop 2</div>
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
