// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import Profile from "./Profile/Profile"
import user from "../jsonInfo/user.json"

import Statistics from "./Statistics/Statistics"
import data from "../jsonInfo/data.json"

import FriendList from "./FriendList"
import friends from "../jsonInfo/friends.json"

import TransactionHistory from "./TransactionHistory"
import transactions from "../jsonInfo/transactions.json"

export const App = () => {
 return <>
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
</>
}
// export const App = () => {
//   <Profile
//   username={username}
//   tag={tag}
//   location={location}
//   avatar={avatar}
//   stats={stats}
// />
// }