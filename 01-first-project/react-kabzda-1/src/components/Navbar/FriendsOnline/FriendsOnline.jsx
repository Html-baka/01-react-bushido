import s from "./FriendsOnline.module.css";
import FriendOnlineItem from "./FriendOnlineItem/FriendOnlineItem"
const FriendsOnline = (props) => {
  
  let friendOnlineItem = props.state.friendsOnline.map( f => <FriendOnlineItem name={f.name} id={f.id} key={f.id} ava={f.ava}></FriendOnlineItem>)
  return (
    <div className={s.main}>
      <h4 className={s.heading}>Friends Online:</h4>
      <div className={s.wrapper}>
        {friendOnlineItem}
      </div>
    </div>
  );
};

export default FriendsOnline;
