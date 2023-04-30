import { HiOutlineArrowRight } from 'react-icons/hi';
import { ButtonWithArrow } from '../../components/ButtonWithArrow';
import css from './Home.module.css';

const Home = () => {
  return (
    <main>
      <section className={css.sectionHome}>
        <ButtonWithArrow link="/users-tweets" right>
          <p>Go to users</p> <HiOutlineArrowRight />
        </ButtonWithArrow>
      </section>
    </main>
  );
};

export default Home;
