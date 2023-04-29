import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectFollowing,
  selectPage,
} from '../redux/users/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const following = useSelector(selectFollowing);
  const page = useSelector(selectPage);

  return { users, isLoading, error, following, page };
};
