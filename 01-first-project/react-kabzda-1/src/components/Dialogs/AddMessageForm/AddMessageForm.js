import React from 'react'
import s from "../Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLengthCreator100 = maxLengthCreator(100)

const AddMessageForm = (props) => {

   return ( 
   <form className={s.textareaWrapper} onSubmit={props.handleSubmit}>
     <Field component={Textarea} 
      validate={[required, maxLengthCreator100]}
      name="newMessageText" placeholder="enter your message"/>
     <button className={s.sendMessage}>Send</button>
   </form>)
 }
 
 export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)