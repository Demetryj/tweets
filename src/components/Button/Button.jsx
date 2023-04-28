import css from './Button.module.css';

export const Button = ({ type = 'button', children, variant }) => {
  return (
    <button className={css[variant]} type={type}>
      {children}
    </button>
  );
};
