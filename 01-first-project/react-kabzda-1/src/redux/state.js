const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hey, how are you?", likeCounts: 15 },
            { id: 2, message: "My first post", likeCounts: 3 }
         ],
         newPostText: 'it-kamasutra'
         
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Hohlojin", ava: "https://2ch.hk/b/src/230174100/16016694875240.png" },
            { id: 2, name: "Ded Klop", ava: "https://pbs.twimg.com/media/Dsj9jNdXgAErMCd.jpg" },
            { id: 3, name: "Petuh", ava: "https://lh3.googleusercontent.com/proxy/TcnTRjDWoZ6Gslu5TkCsMHH-cMxSiFDdkPvrvmac3jw48ZBW6EoaCJyzITxn_CLOHaVlDKKlflv7Kuf0x7TUw4bn-s4" },
            { id: 4, name: "Klop 1", ava: "https://www.blast.hk/attachments/64805/" },
            { id: 5, name: "Klop 2", ava: "https://cs7.pikabu.ru/post_img/2018/01/06/7/151523515925553621.jpg"}
         ],
         messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How is your react?" },
            { id: 3, message: "heeeey?" },
         ],
         newMessageText: ''
      },
      navBar: {
         friendsOnline: [
            { id: 1, name: "Hohlojin", ava: "https://2ch.hk/b/src/230174100/16016694875240.png" },
            { id: 2, name: "Ded Klop", ava: "https://pbs.twimg.com/media/Dsj9jNdXgAErMCd.jpg" },
            { id: 3, name: "Petuh", ava: "https://lh3.googleusercontent.com/proxy/TcnTRjDWoZ6Gslu5TkCsMHH-cMxSiFDdkPvrvmac3jw48ZBW6EoaCJyzITxn_CLOHaVlDKKlflv7Kuf0x7TUw4bn-s4" }
         ]
      }
   },
   _callSubscriber() {
      console.log("State is changed");
   },
   getState() { 
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   
   dispatch(action) { //{ type: 'ADD-POST' }
      
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounts: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_POST_TEXT) {
         store._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
      else if (action.type === SEND_MESSAGE) {
         let newMessage = {
            id: 4,
            message: action.dialogMessage
         };
         store._state.dialogsPage.messages.push(newMessage);
         store._state.dialogsPage.newMessageText = '';
         this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         store._state.dialogsPage.newMessageText = action.newText;
         this._callSubscriber(this._state);
      }
   }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageActionCreator = (text)=> 
({type: SEND_MESSAGE, dialogMessage: text })
export const updateNewMessageActionCreator = (text)=> 
({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
 
export default store;
window.store = store;