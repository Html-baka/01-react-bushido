import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));
  // let newMessageText = props.dialogsPage.newMessageText;
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  }
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageAction(text);
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.textareaWrapper}>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
        <button onClick={sendMessage} className={s.sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
