import s from "./ProfileInfo.module.css";
import React, { useState } from 'react';
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user_undefined from "../../../assets/images/user_undefined.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }
  const onAvaSmallSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div>
        {/* <img
          className={s.mainPicture}
          src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_"
        ></img> */}
      </div>
      
      <div className={s.avaWrapper}>
      {/* <div><img alt={"avatarka"} src={props.profile.photos.large }></img></div> */}
      
        
        <div>
        <div className={s.avaCover}>
            <img alt={"avatarka"} className={s.ava} src={props.profile.photos.small 
              || user_undefined}
            ></img>
        </div>
          { props.isOwner && 
          <div className={s.avaUpload}>
            <input className={s.avaUploadInput} type={"file"} id="input_file" onChange={onAvaSmallSelected}/>
            <label className={s.avaUploadLabel} for="input_file">
              <span className={s.avaUploadLabel_iconWrapper}><img className={s.inputIcon} src="https://www.svgrepo.com/show/138917/download.svg" alt="Выбрать файл" width="25"/></span>
            </label>
          </div> }
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus}/>

        { editMode ? <ProfileDataForm props={props}/> 
          : <ProfileData goToEditMode={()=> {setEditMode(true)}} props={props}/>}
            
      </div>
    </div>
  );
};

const ProfileData = ({props, goToEditMode}) => {
  
  return <div>

<div>
  {props.isOwner && <div><button onClick={goToEditMode}>edit</button></div>}  
  <div><h4>{props.profile.fullName}</h4></div>
  <div>{props.profile.aboutMe}</div>
  
  <div>Looking for a job: {props.profile.lookingForAJob? 'Yes' : 'No'}</div>
  {props.profile.lookingForAJob && 
    <div><div>Description</div> {props.profile.lookingForAJobDescription}</div>
   }
   <div>
     <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
     })}
   </div>
</div>
  </div> 
  
  
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;
