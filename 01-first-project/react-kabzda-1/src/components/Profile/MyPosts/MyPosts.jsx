import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hey, how are you?", likeCounts: 15 },
    { id: 2, message: "My first post", likeCounts: 3 }
  ];
  let postsElements = posts.map( p => <Post likeCounts={p.likeCounts} message={p.message} />);
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
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
