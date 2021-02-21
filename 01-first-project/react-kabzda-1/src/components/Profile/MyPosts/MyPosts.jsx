import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    { id: 1, message: "Hey, how are you?", likeCounts: 15 },
    { id: 2, message: "My first post", likeCounts: 3 }
  ];
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
        <Post likeCounts={postsData[0].likeCounts} message={postsData[0].message} />
        <Post likeCounts={postsData[1].likeCounts} message={postsData[1].message} />
      </div>
    </div>
  );
};

export default MyPosts;
