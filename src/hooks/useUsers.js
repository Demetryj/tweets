import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectFollowing,
} from '../redux/users/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const following = useSelector(selectFollowing);

  return { users, isLoading, error, following };
};
