import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
  
  let postsElements = 
    props.store.state.profilePage.posts.map( p => <Post likeCounts={p.likeCounts} message={p.message} />);

  let newPostElement = React.createRef();

  let addPost = () => { 
    props.store.addPost()
  }   
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.updateNewPostText(text);
  }
  return (
    <div className={s.MyPostsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.store.state.profilePage.newPostText} />
        </div>
        <div>
          <button  onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
