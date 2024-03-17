import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../redux/shared/action";
import useInput from "../hooks/useInput";
import {
  asyncDownvoteThread,
  asyncNeturalizeThread,
  asyncUpvoteThread,
} from "../redux/threads/action";
import FilterCategory from "../components/molecules/FilterCategory";
import ThreadList from "../components/organisms/ThreadList";
import CreateButton from "../components/molecules/CreateButton";

const HomePage = () => {
  const { threads = [], users = [], auth } = useSelector((states) => states);
  const [category, onCategoryChange] = useInput("All");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categories = [...new Set(threads.map((thread) => thread.category))];

  const listCategories = ["All", ...categories];

  const filteredThreads = threads
    .filter((thread) => category === "All" || thread.category === category)
    .map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      auth: auth ? auth.id : null,
    }));

  const onUpvoteThreadButton = (threadId) =>
    dispatch(asyncUpvoteThread(threadId));

  const onDownvoteThreadButton = (threadId) =>
    dispatch(asyncDownvoteThread(threadId));

  const onNeturalizeThreadButton = (threadId) =>
    dispatch(asyncNeturalizeThread(threadId));

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-700 my-2">Babeh Forum</h1>
        <FilterCategory categories={listCategories} onChange={onCategoryChange} />
        <ThreadList
          threads={filteredThreads}
          onUpvote={onUpvoteThreadButton}
          onDownvote={onDownvoteThreadButton}
          onNeturalize={onNeturalizeThreadButton}
          className="flex flex-col mt-4"
        />
        {auth?.id && <CreateButton className="mt-4" />}
      </div>
    </section>
  );
};

export default HomePage;
