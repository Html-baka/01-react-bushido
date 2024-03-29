const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Hohlojin",
      ava: "https://2ch.hk/b/src/230174100/16016694875240.png",
    },
    {
      id: 2,
      name: "Ded Klop",
      ava: "https://pbs.twimg.com/media/Dsj9jNdXgAErMCd.jpg",
    },
    {
      id: 3,
      name: "Petuh",
      ava:
        "https://lh3.googleusercontent.com/proxy/TcnTRjDWoZ6Gslu5TkCsMHH-cMxSiFDdkPvrvmac3jw48ZBW6EoaCJyzITxn_CLOHaVlDKKlflv7Kuf0x7TUw4bn-s4",
    },
    { id: 4, name: "Klop 1", ava: "https://www.blast.hk/attachments/64805/" },
    {
      id: 5,
      name: "Klop 2",
      ava: "https://cs7.pikabu.ru/post_img/2018/01/06/7/151523515925553621.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your react?" },
    { id: 3, message: "heeeey?" },
  ],
  
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: text}],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;
