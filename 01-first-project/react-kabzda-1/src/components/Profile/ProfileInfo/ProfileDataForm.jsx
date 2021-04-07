import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({props})=>  {
   
  return (
    <form>
      <div>
        <div>
          <button onClick={()=>{}}>save</button>
        </div>
        <div>
          <h4>Full name:</h4><Field placeholder={"Full name"} name={'fullName'} validate={[]} component={Input}/>
        </div>
        <div>{props.profile.aboutMe}</div>

        <div>
          Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <div>Description</div> {props.profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>Contacts:</b>{" "}
          {/* {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })} */}
        </div>
      </div>
    </form>
  );
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
