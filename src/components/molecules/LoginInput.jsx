import { Link } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="space-y-6">
      <Input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit" onClick={() => login({ email, password })} className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
        Login
      </Button>
      <Link to="/signUp">Register</Link>
    </form>
  );
};

export default LoginInput;
