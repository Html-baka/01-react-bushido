import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";

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
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.navBar = navBarReducer(this._state.navBar, action)
      
      this._callSubscriber(this._state)
   }
}


 
export default store;
window.store = store;