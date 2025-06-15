import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({friends}) {    
    return (
        <div className={css.container}>
            <ul className={css.box}>
                {friends.map(friend => (
                    <li key={friend.id}><FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /></li>
                ))}                                
            </ul>
        </div>
    );
}