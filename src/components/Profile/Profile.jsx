import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
    <div className={css.profileContainer}>
        <div className={css.profileInfor}>
            <img src={image} alt="Profile photo" className={css.profileImg}/>
                <p className={css.profileName}>{name}</p>
                <p className={css.profileUsername}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
        </div>

        <ul className={css.profileStats}>
            <li className={css.profileStatsItem}>
                <span>Followers</span>
                <span className={css.profileStatsNumber}>{stats.followers}</span>
            </li>
            <li className={css.profileStatsItem}>
                <span>Views</span>
                    <span className={css.profileStatsNumber}>{stats.views}</span>
            </li>
            <li className={css.profileStatsItem}>
                <span>Likes</span>
                    <span className={css.profileStatsNumber}>{stats.likes}</span>
            </li>
        </ul>
        </div>
    )
};
