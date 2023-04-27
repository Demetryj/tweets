import { useSelector } from "react-redux";
import {
  selectUsers,
  selectIsLoading,
  selectError,
} from "../redux/users/selectors";

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { users, isLoading, error };
};
