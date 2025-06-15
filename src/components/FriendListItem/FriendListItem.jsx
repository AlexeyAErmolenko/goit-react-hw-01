import './FriendListItem.module.css';
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.card}>
            <img className={css.photo} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={css.text}>
                {isOnline ?
                    <span className={css.green}>Online</span> :
                    <span className={css.red}>Offline</span>}
            </p>
        </div>
    );
}