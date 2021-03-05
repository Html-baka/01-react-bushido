import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogsPage;
 
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  }
  return (
    <Dialogs updateNewMessageAction={onMessageChange} sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
