import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../redux/shared/action";
import LeaderboardList from "../components/organisms/LeaderboardList";

const LeaderboardPage = () => {
  const { leaderboards = [], auth } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const leaderboardList = auth
    ? leaderboards.map((leaderboard) => ({
        ...leaderboard,
        authUser: auth.id,
      }))
    : leaderboards;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">
        Klasemen Pengguna Aktif
      </h1>
      <LeaderboardList
        leaderboards={leaderboardList}
        className="w-full max-w-md mt-4"
      />
    </section>
  );
};

export default LeaderboardPage;
