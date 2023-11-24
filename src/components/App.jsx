import Profile from "./Profile/Profile"
import user from "../jsonInfo/user.json"

import Statistics from "./Statistics/Statistics"
import data from "../jsonInfo/data.json"

import FriendList from "./FriendList/FriendList"
import friends from "../jsonInfo/friends.json"

import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../jsonInfo/transactions.json"

export const App = () => {
 return <div className="container">
 <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics 
data={data}/>
<Statistics title="Upload stats" data={data} />

<FriendList friends={friends} />
<TransactionHistory transactions={transactions} />
</div>
}
