import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/operations';
import { ListUserCard } from '../components/ListUserCard';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <main>
      <section>
        <ListUserCard />
      </section>
    </main>
  );
};

export default Tweets;
