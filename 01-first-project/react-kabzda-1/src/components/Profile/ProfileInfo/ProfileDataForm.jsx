import React from "react";
import s from "./ProfileInfo.module.css";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css"
const ProfileDataForm = ({handleSubmit, profile, error})=>  {
  return <form onSubmit={handleSubmit}>
      <div>
        <div>
          <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}> {error}</div>}
        <div>
          <h4>Full name:</h4><Field placeholder={"Full name"} name={'fullName'} validate={[]} component={Input}/>
        </div>
        <div>About me:
          <Field placeholder={"About me"} name={'aboutMe'} validate={[]} component={Textarea}/>
        </div>

        <div>
          Looking for a job: <Field placeholder={""} name={'lookingForAJob'} validate={[]} component={Input} type={"checkbox"}/>
        </div>
          <div>
            <div>Description
            <Field placeholder={"Description"} name={'lookingForAJobDescription'} validate={[]} component={Textarea}/></div>
          </div>
  
        <div>
          <b>Contacts:</b>{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={s.contact}> 
              <b>{key}: <Field placeholder={key} name={'contacts.' + key} validate={[]} component={Input}/></b>
              </div>
            );
          })} 
        </div>
      </div>
    </form>
};
 
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
