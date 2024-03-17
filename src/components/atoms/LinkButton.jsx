import { Link } from "react-router-dom";

const LinkButton = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export default LinkButton;
