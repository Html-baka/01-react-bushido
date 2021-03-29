import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id}/>
  ));

  const onSubmit = (values) => {
    props.sendMessage(values.newMessageText);
 }  

  if(!props.isAuth) return <Redirect to={"/login"}/>
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={onSubmit}/>
    </div>
  );
};


export default Dialogs;
