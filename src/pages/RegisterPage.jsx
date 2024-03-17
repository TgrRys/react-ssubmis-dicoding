import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../redux/users/action";
import RegisterInput from "../components/molecules/RegisterInput";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/signIn");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Register Page.
        </h1>
        <RegisterInput register={onRegister} className="space-y-6" />
      </div>
      <p className="mt-4 text-gray-500">
        Already have an account?
        {" "}
        <Link to="/signIn" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </section>
  );
};

export default RegisterPage;
