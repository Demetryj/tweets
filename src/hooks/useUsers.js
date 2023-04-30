import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectFollowing,
  selectPage,
  selectVisibleUsers,
} from '../redux/users/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const following = useSelector(selectFollowing);
  const page = useSelector(selectPage);
  const visibleUsers = useSelector(selectVisibleUsers);

  return { users, isLoading, error, following, page, visibleUsers };
};
