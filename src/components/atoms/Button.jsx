const Button = ({ onClick, children, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
