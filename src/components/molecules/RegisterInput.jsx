import Input from "../atoms/Input";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="space-y-4">
      <Input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Button
        type="submit"
        onClick={() => register({ name, email, password })}
        className="w-full bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterInput;
