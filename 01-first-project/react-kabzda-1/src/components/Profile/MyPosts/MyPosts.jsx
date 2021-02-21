import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.MyPostsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post likeCounts="15" message="Hey, how are you?" />
        <Post likeCounts="3" message="My first post" />
      </div>
    </div>
  );
};

export default MyPosts;
