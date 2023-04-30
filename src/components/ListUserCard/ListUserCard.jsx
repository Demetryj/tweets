import { useUsers } from '../../hooks/useUsers';
import { UserCard } from '../UserCard';
import css from './ListUserCard.module.css';

export const ListUserCard = () => {
  const { visibleUsers } = useUsers();

  return (
    <ul className={css.userList}>
      {visibleUsers.map(user => (
        <li className={css.userItem} key={user.id}>
          <UserCard dataUser={user} />
        </li>
      ))}
    </ul>
  );
};
