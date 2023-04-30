import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { getUsers } from '../../redux/users/operations';
import { useUsers } from '../../hooks/useUsers';
import { changePage } from '../../redux/users/usersSlice';
import { ButtonWithArrow } from '../../components/ButtonWithArrow';
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
        <ButtonWithArrow link="/" left>
          <HiOutlineArrowLeft />
          <p>Back</p>
        </ButtonWithArrow>
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
