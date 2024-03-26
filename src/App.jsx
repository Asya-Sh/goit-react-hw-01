import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import userData from './userData.json';
import friends from './friends.json';

function App() {
  return (
    <>
  <Profile name />
<Profile tag />
<Profile location />
<Profile image />
<Profile stats/>
  <FriendList />
  <TransactionHistory />
    </>
  )
}

export default App
