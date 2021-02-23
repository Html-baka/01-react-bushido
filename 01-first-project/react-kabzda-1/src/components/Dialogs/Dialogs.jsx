import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Hohlojin" },
    { id: 2, name: "Ded Klop" },
    { id: 3, name: "Petuh" },
    { id: 4, name: "Klop 1" },
    { id: 5, name: "Klop 2" },
  ];
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your react?" },
    { id: 3, message: "heeeey?" },
  ];

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map( m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
