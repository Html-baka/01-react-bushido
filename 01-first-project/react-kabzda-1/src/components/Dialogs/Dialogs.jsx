import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
const Dialogs = (props) => {
  
  let dialogsElements = props.store.state.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.store.state.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));
  let textAreaElement = React.createRef();

  let sendMessage = () => {
    let text = textAreaElement.current.value;
    props.store.sendMessage(text);
    textAreaElement.current.value = '';
  }
  let onMessageChange = () => {
    let text = textAreaElement.current.value;
    props.store.updateNewMessageText(text);
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.textareaWrapper}>
        <textarea onChange={onMessageChange} ref={ textAreaElement }/>
        <button onClick={sendMessage} className={s.sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
