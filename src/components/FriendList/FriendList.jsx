import FriendListItem from "../FriendListItem/FriendListItem";
import './FriendList.css';

const FriendList = ({ friends }) => {
    
    return(
    <ul>
        {friends.map(friend => (
            <li key={friend.id}>
                <FriendListItem {...friend} />
            </li>
        ))}
        </ul>
    );
    
};

export default FriendList