const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let initialState = {
  users: [ ],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
//     {  id: 1,
//        photoUrl: 'https://u.livelib.ru/reader/Simak_ss3497/r/lelxg9ii/lelxg9ii-r.jpg',
//        followed: false,
//        fullName: "KiT",
//        status: "Meow..",
//        location: { city: "Kiev", country: "Ukraine" },
//      },
//      { id: 2,
//        photoUrl: 'https://i.pinimg.com/originals/7f/2a/50/7f2a500aee5a59ea8722fcaf43d8ba09.png',
//        followed: true,
//        fullName: "yoba",
//        status: "trollong ur mom",
//        location: { city: "zalupivka", country: "Ukraine" },
//      },
//      { id: 3,
//        photoUrl: 'https://3.bp.blogspot.com/-x0lDfNSLUZw/XBp4fTKUtYI/AAAAAAAAJLg/VTy1rY8n5P0jqOu2nbGqSkZjtq2W8p8tgCLcBGAs/s1600/deeb0efba601645f32215e72e166e732cc082591_hq.jpg',
//        followed: false,
//        fullName: "korgi",
//        status: "kiiik",
//        location: { city: "moscow", country: "russia" },
//      },
//      { id: 4,
//        photoUrl: 'https://www.meme-arsenal.com/memes/acd328c37f112fcb0ee6bbfc79973d10.jpg',
//        followed: true,
//        fullName: "lepr",
//        status: "ooooo moya oborona",
//        location: { city: "Minsk", country: "Belarus" }
//      }
//  ]
};
const usersReducer = (state = initialState, action) => {
  
   switch (action.type) {
    case FOLLOW: 
      return { 
        ...state, 
        users: state.users.map(u=> {
          if (u.id === action.userId){
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW: 
    return { 
      ...state, 
      users: state.users.map(u=> {
        if (u.id === action.userId){
          return {...u, followed: false}
        }
        return u;
      })
    }
    case SET_USERS:
      return { ...state, users: action.users }
      
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count}

      default:
      return state;
  }
    
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default usersReducer;
