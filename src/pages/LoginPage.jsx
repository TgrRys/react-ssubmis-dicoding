import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../redux/auth/action";
import LoginInput from "../components/molecules/LoginInput";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-700">Login Page.</h1>
        <LoginInput login={onLogin} className="space-y-6" />
      </div>
      <p className="mt-4 text-gray-500">
        Don&apos;t have an account?
        {" "}
        <Link to="/signUp" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
