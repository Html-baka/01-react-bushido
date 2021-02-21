import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
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
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        ></img>
        ava + descr
      </div>
    </div>
  );
};

export default ProfileInfo;
