import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hey, how are you?", likeCounts: 15 },
    { id: 2, message: "My first post", likeCounts: 3 },
  ]
};
it('new post should be added', () => {
  //1. test data
  let action = addPostActionCreator("hohol");

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
    expect(newState.posts.length).toBe(3)
});
it('message of new post should be correct', () => {
  //1. test data
  let action = addPostActionCreator("hohol");
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("hohol")

});
it('after deleting ,message length should decrement', () => {
  //1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(1)

});

