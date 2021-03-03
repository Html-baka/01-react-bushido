import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageText = props.state.newMessageText;
  // let textAreaElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageText;
    props.dispatch(sendMessageActionCreator(text));
    newMessageText = '';
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageActionCreator(text));
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
