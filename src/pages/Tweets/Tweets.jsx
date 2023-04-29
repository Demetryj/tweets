import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/users/operations';
import { useUsers } from '../../hooks/useUsers';
import { changePage } from '../../redux/users/usersSlice';
import { ListUserCard } from '../../components/ListUserCard';
import { Button } from '../../components/Button';
import css from './Tweets.module.css';

const Tweets = () => {
  const dispatch = useDispatch();
  const { users, page, isLoading } = useUsers();
  const maxPages = 12;

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const togglePage = () => {
    if (users.length === maxPages) {
      return;
    }

    dispatch(changePage(page + 1));
  };

  return (
    <main>
      <section className={css.sectionTweets}>
        <ListUserCard page={page} />
        {users.length !== maxPages && !isLoading && (
          <Button type="button" variant="loadMore" onClick={togglePage}>
            Load more
          </Button>
        )}
      </section>
    </main>
  );
};

export default Tweets;
