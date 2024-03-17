import Avatar from "../atoms/Avatar";

const LeaderboardItem = ({ score, user, authUser }) => (
  <tr className="border-b border-gray-200">
    <td className="flex items-center py-2 px-4">
      <Avatar src={user.avatar} alt={user.id} title={user.name} className="w-10 h-10 rounded-full mr-2" />
      <div>
        <p className="font-semibold text-gray-700">
          {user.name}
          {" "}
          {authUser === user.id ? <span className="text-blue-500">Anda</span> : ""}
        </p>
        <small className="text-gray-500">
          <i>{user.email}</i>
        </small>
      </div>
    </td>
    <td align="right" className="py-2 px-4">{score}</td>
  </tr>
  );

export default LeaderboardItem;
