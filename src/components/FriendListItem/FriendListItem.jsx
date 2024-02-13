import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline, }) => {
    const textColor = clsx(css.textSize, isOnline ? css.isOnline : css.isOffline);
    return (
        <div className={css.ListItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={textColor}>{isOnline ? "isOnline" : "isOffline"}</p>
        </div>
    );
};