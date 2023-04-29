import { useDispatch } from 'react-redux';
import { useUsers } from '../../hooks/useUsers';
import logo from '../../images/logo.png';
import defaultAvatar from '../../images/default-avatar.png';
import { Button } from '../Button';
import { changeFollowing } from '../../redux/users/usersSlice';
import css from './UserCard.module.css';

const numeral = require('numeral');

export const UserCard = ({
  dataUser: { id, name, tweets, followers, avatar },
}) => {
  const dispach = useDispatch();
  const { following } = useUsers();

  const isFollow = following.find(item => item.id === id);

  const toggleFollow = () => {
    if (!isFollow) {
      dispach(changeFollowing({ id, followers: followers + 1, follow: true }));
    } else {
      dispach(
        changeFollowing({
          id,
          followers: isFollow.followers - 1,
          follow: false,
        })
      );
    }
  };

  return (
    <div className={css.userCardHeader}>
      <img
        className={css.logo}
        src={logo}
        alt="logo"
        width="76px"
        height="22px"
      />

      <div className={css.userCardBody}>
        <div className={css.userAvatarContainer}>
          <div className={css.userAvatarWrapper}>
            <img
              className={css.userAvatar}
              src={avatar ? avatar : defaultAvatar}
              alt={`${name} avatar`}
              width="62px"
              height="62px"
            />
          </div>
        </div>

        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>
          {numeral(isFollow ? isFollow.followers : followers).format('0,0')}{' '}
          followers
        </p>
        <Button
          type="button"
          variant="follow"
          onClick={toggleFollow}
          following={isFollow}
        >
          {!isFollow ? 'follow' : 'following'}
        </Button>
      </div>
    </div>
  );
};
