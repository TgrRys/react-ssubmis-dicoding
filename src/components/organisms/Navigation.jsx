import { Link } from "react-router-dom";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePresentationChartBar,
  HiOutlineUser,
} from "react-icons/hi2";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";

const Navigation = ({ authUser, signOut }) => (
  <nav className="flex justify-between items-center py-4 px-4 bg-gray-800">
    <div className="flex space-x-2">
      <Link to="/" className="flex items-center space-x-1 text-gray-200 hover:text-gray-400">
        <HiOutlineChatBubbleLeftRight className="text-2xl" />
        <span className="text-md">Threads</span>
      </Link>
      <Link to="/leaderboards" className="flex items-center space-x-1 text-gray-200 hover:text-gray-400">
        <HiOutlinePresentationChartBar className="text-2xl" />
        <span className="text-md">Leaderboards</span>
      </Link>
    </div>
    {authUser === null ? (
      <Link to="/signIn" className="flex items-center space-x-1 text-gray-200 hover:text-gray-400">
        <HiOutlineUser className="text-2xl" />
        <span className="text-md">SignIn</span>
      </Link>
      ) : (
        <div className="flex items-center space-x-2">
          <Avatar
            src={authUser.avatar}
            alt={authUser.id}
            title={authUser.name}
            className="w-6 h-6 rounded-full"
          />
          <Button type="button" onClick={signOut} className="bg-red-700 text-gray-200 rounded px-1 py-0.5 text-sm hover:bg-red-900">
            Sign out
          </Button>
        </div>
      )}
  </nav>
  );

export default Navigation;
