import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/users/operations';
import { useUsers } from '../../hooks/useUsers';
import { changePage } from '../../redux/users/usersSlice';
import { AppBar } from '../../components/AppBar';
import { ListUserCard } from '../../components/ListUserCard';
import { Button } from '../../components/Button';
import css from './Tweets.module.css';

const QUERY_LIMIT_PAGES = 6;
const maxPages = 12;

const Tweets = () => {
  const dispatch = useDispatch();
  const { users, page, isLoading, error, visibleUsers } = useUsers();

  const isFirstRender = useRef(true);
  const hasUsers = users.length > 0;

  useEffect(() => {
    if (hasUsers && isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(getUsers({ page, limit: QUERY_LIMIT_PAGES }));
  }, [dispatch, page, hasUsers]);

  const togglePage = () => {
    if (users.length === maxPages) {
      return;
    }

    dispatch(changePage(page + 1));
  };

  if (error) {
    return (
      <div className={css.container}>
        <p className={css.error}>{error}</p>
      </div>
    );
  }

  return (
    <main>
      <div className={css.container}>
        <section>
          <AppBar />
        </section>
        <section>
          <ListUserCard page={page} />
          {users.length !== maxPages &&
            !isLoading &&
            visibleUsers.length > 0 && (
              <Button type="button" variant="loadMore" onClick={togglePage}>
                Load more
              </Button>
            )}
        </section>
      </div>
    </main>
  );
};

export default Tweets;
