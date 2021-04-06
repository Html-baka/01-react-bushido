import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className={s.ProfileContent}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} 
        profile={props.profile} status={props.status} 
        updateStatus={props.updateStatus} getStatus={props.getStatus}/>
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
