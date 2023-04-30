import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ButtonWithArrow } from '../ButtonWithArrow';
import { statusFilters } from '../../redux/filters/constatnts';
import { changeStatusFilter } from '../../redux/filters/filterSlice';
import css from './AppBar.module.css';

export const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeFilter = filter => {
    dispatch(changeStatusFilter(filter));
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.wrapper}>
      <ButtonWithArrow link="/" left>
        <HiOutlineArrowLeft />
        <p>Back</p>
      </ButtonWithArrow>

      <button
        type="button"
        className={css.iconMenuWrapper}
        onClick={toggleDropdown}
      >
        <GiHamburgerMenu size="25px" />
      </button>

      {isOpen && (
        <ul className={css.menu}>
          <li>
            <button
              type="button"
              className={css.btnMenu}
              onClick={() => changeFilter(statusFilters.all)}
            >
              Show all
            </button>
          </li>
          <li>
            <button
              type="button"
              className={css.btnMenu}
              onClick={() => changeFilter(statusFilters.follow)}
            >
              Follow
            </button>
          </li>
          <li>
            <button
              type="button"
              className={css.btnMenu}
              onClick={() => changeFilter(statusFilters.followings)}
            >
              Followings
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
