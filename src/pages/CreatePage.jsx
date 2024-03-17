import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncAddThread } from "../redux/threads/action";
import ThreadInput from "../components/molecules/ThreadInput";

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreate = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">
        Create New Thread
      </h1>
      <ThreadInput create={onCreate} className="w-full max-w-md mt-4" />
    </section>
  );
};

export default CreatePage;
