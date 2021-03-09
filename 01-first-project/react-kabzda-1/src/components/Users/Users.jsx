import React from "react";
import s from "./users.module.css";

let Users = (props) => {
debugger
   if (props.users.length === 0) {
      props.setUsers([
         {  id: 1,
            photoUrl: 'https://u.livelib.ru/reader/Simak_ss3497/r/lelxg9ii/lelxg9ii-r.jpg',
            followed: false,
            fullName: "KiT",
            status: "Meow..",
            location: { city: "Kiev", country: "Ukraine" },
          },
          { id: 2,
            photoUrl: 'https://i.pinimg.com/originals/7f/2a/50/7f2a500aee5a59ea8722fcaf43d8ba09.png',
            followed: true,
            fullName: "yoba",
            status: "trollong ur mom",
            location: { city: "zalupivka", country: "Ukraine" },
          },
          { id: 3,
            photoUrl: 'https://3.bp.blogspot.com/-x0lDfNSLUZw/XBp4fTKUtYI/AAAAAAAAJLg/VTy1rY8n5P0jqOu2nbGqSkZjtq2W8p8tgCLcBGAs/s1600/deeb0efba601645f32215e72e166e732cc082591_hq.jpg',
            followed: false,
            fullName: "korgi",
            status: "kiiik",
            location: { city: "moscow", country: "russia" },
          },
          { id: 4,
            photoUrl: 'https://www.meme-arsenal.com/memes/acd328c37f112fcb0ee6bbfc79973d10.jpg',
            followed: true,
            fullName: "lepr",
            status: "ooooo moya oborona",
            location: { city: "Minsk", country: "Belarus" }
          }
      ])
   }
  return (
    <div>
      {
         props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto}/>
            </div>
            <div>
               { u.followed 
                  ? <button onClick={()=> { props.unfollow(u.id)}}>Unfollow</button> 
                  : <button onClick={()=> { props.follow(u.id)}}>Follow</button> }
            </div>
          </span>
          <span>
             <div>{u.fullName}</div>
             <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </span>
        </div>
         ))
      }
    </div>
  );
};

export default Users;
