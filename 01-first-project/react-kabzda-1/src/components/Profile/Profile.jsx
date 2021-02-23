import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
  
  return (
    <div className={s.ProfileContent}>
      <ProfileInfo />
      <MyPosts postsElements={ props.postsElements }/>
    </div>
  );
};

export default Profile;
