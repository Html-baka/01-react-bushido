import s from "./ProfileInfo.module.css";
import React from 'react';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }

  
  return (
    <div>
      <div>
        <img
          className={s.mainPicture}
          src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_"
        ></img>
      </div>
      <div className={s.avaWrapper}>
        <img
          className={s.ava}
          src={props.profile.photos.small}
        ></img>
        <div><h4>{props.profile.fullName}</h4></div>
        <div>{props.profile.aboutMe}</div>
        <div><img src={props.profile.photos.large}></img></div>
        <div>Looking for a job: {props.profile.lookingForAJob? 'Yes' : 'No'}</div>
        <div><div>Description</div> {props.profile.lookingForAJobDescription}</div>
       
      </div>
    </div>
  );
};

export default ProfileInfo;
