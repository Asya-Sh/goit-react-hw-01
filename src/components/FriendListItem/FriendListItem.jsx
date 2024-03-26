import s from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.cards}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(s.status, isOnline ? s.green : s.red)}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default FriendListItem;
