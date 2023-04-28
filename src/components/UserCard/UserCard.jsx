import css from './UserCard.module.css';
import logo from '../../images/logo.png';
import defaultAvatar from '../../images/default-avatar.png';
import { Button } from '../Button';

export const UserCard = ({ dataUser: { name, tweets, followers, avatar } }) => {
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

        <p className={css.tweets}>{tweets}</p>
        <p className={css.followers}>{followers}</p>
        <Button type="button" variant="follow">
          follow
        </Button>
      </div>
    </div>
  );
};
