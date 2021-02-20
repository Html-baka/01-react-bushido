import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post likeCounts='15' message='Hey, how are you?'/>
        <Post likeCounts='3' message='My first post'/>
      </div>
    </div>
  );
};

export default MyPosts;
