const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(({avatar, name, isOnLine, id}) => (
            <li className="item" key ={id}>
                <span className="status">{isOnLine}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
             <p className="name">{name}</p>
          </li>
        ))}
    </ul>
);

export default FriendList;