import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list_friends}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem {...friend} />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;
