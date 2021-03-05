import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageText = state.newMessageText;

  let sendMessage = () => {
    props.sendMessage();
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageAction(text);
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.textareaWrapper}>
        <textarea onChange={onMessageChange} value={newMessageText}/>
        <button onClick={sendMessage} className={s.sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
