import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className={s.ProfileContent}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
