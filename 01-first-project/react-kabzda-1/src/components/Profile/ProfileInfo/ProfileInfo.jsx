import s from "./ProfileInfo.module.css";
import React from 'react';
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user_undefined from "../../../assets/images/user_undefined.png";

const ProfileInfo = (props) => {
  
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
      <div><img alt={"avatarka"} src={props.profile.photos.large }></img></div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus}/>
        
        <div>
          <img alt={"avatarka"} className={s.ava} src={props.profile.photos.small 
            || user_undefined}
          ></img>
          { props.isOwner && <input type={"file"} onChange={onAvaSmallSelected}/>}
        </div>
        <div><h4>{props.profile.fullName}</h4></div>
        <div>{props.profile.aboutMe}</div>
        
        <div>Looking for a job: {props.profile.lookingForAJob? 'Yes' : 'No'}</div>
        <div><div>Description</div> {props.profile.lookingForAJobDescription}</div>
       
      </div>
    </div>
  );
};

export default ProfileInfo;
