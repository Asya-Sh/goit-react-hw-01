import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.userphoto} src={image} alt="User avatar" />
                <p className={s.title}>{name}</p>
                <p className={s.text}>@{tag}</p>
                <p className={s.text}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.item_stats}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={s.item_stats}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={s.item_stats}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
