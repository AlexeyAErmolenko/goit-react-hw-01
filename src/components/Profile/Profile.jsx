import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats: { followers, views, likes }, }) {
    return <>
        <div className={css.container}>
            <div className={css.dataMain}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.dataMainImg}
                />
                <p className={css.dataMainName}>{name}</p>
                <p className={css.dataMainText}>@{tag}</p>
                <p className={css.dataMainText}>{location}</p>
            </div>  
            <ul className={css.dataSocial}>
                <li className={css.dataSocialText}>
                    <span className={css.dataSocialTitle}>Followers</span>
                    <span className={css.dataSocialNumber}>{followers}</span>
                </li>
                <li className={css.dataSocialText}>
                    <span className={css.dataSocialTitle}>Views</span>
                    <span className={css.dataSocialNumber}>{views}</span>
                </li>
                <li className={css.dataSocialText}>
                    <span className={css.dataSocialTitle}>Likes</span>
                    <span className={css.dataSocialNumber}>{likes}</span>
                </li>
            </ul>
        </div>
    </>;
}