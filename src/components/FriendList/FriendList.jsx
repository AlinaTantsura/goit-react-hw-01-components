import css from './FriendList.module.css';
import clsx from "clsx";

const FriendList = ({friends}) => (
    <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) =>(
            <li className={css.item} key ={id}>
                <span className={clsx({[css.status]: true, [css.onLine]: isOnline, [css.offLine]: !isOnline})}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
             <p className={css.name}>{name}</p>
          </li>
        ))}
    </ul>
);

export default FriendList;