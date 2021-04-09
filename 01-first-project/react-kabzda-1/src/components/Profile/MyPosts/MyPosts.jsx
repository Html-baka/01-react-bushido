import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const addNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText"  placeholder="New post"
            validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

const MyPostsReduxForm = reduxForm({
  //a unique name for the form
  form: "post"
})(addNewPostForm);

const MyPosts = React.memo((props) => {
  console.log("render");
  let postsElements = 
    
    [...props.posts]
      .reverse()
        .map( p => <Post key={p.id} likeCounts={p.likeCounts} message={p.message} key={p.id}/>);

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
 }  

  return (
    <div className={s.MyPostsWrapper}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
});





export default MyPosts

