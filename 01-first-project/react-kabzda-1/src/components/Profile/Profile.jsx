import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className={s.ProfileContent}>
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
