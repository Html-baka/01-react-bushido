import React from "react";
import { sendMessageActionCreator, updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  { connect } from "react-redux";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state)=> {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages:state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
let mapDispatchToProps = (dispatch)=> {
  return {
    updateNewMessageAction: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    sendMessage:() => {
      dispatch(sendMessageActionCreator());
    } 
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
