import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './ButtonWithArrow.module.css';

export const ButtonWithArrow = ({ children, link, right, left }) => {
  return (
    <NavLink
      className={clsx(css.btnWithArrow, {
        [css.arrowRight]: right,
        [css.arrowLeft]: left,
      })}
      to={link}
    >
      {children}
    </NavLink>
  );
};
