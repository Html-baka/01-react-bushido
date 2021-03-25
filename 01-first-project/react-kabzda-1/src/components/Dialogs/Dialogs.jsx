import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id}/>
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
  if(!props.isAuth) return <Redirect to={"/login"}/>
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
