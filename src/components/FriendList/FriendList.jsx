import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
<ul className={css.list} >
	{friends.map((friend) => (
	<li key={friend.id} className={css.listItem}>
     <FriendListItem  
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
        </li>
      ))}
    </ul>
  );
};