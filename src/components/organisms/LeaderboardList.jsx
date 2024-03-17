import LeaderboardItem from "../molecules/LeaderboardItem";

const LeaderboardList = ({ leaderboards }) => (
  <table className="w-full text-left table-auto">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2">Pengguna</th>
        <th className="px-4 py-2 text-right">Skor</th>
      </tr>
    </thead>
    <tbody>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))}
    </tbody>
  </table>
  );

export default LeaderboardList;
