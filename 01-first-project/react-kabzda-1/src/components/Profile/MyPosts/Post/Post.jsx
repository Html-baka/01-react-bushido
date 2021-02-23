import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/3512693/pub_5efb3ff066fe1d5006536937_5efb4be4cdd4d637ce0fd2e8/scale_1200"></img>
      { props.message }
      <div>
        <span>{props.likeCounts} like</span>
      </div>
    </div>
  );
};

export default Post;
