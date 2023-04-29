import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  type = 'button',
  children,
  variant,
  onClick,
  following,
}) => {
  return (
    <button
      className={clsx(css[variant], { [css.isFollowing]: following })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
