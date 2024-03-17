import { useNavigate } from "react-router-dom";
import { BiMessageRoundedDots } from "react-icons/bi";
import { postedAt } from "../../utils/helpers";
import VoteButton from "./VoteButton";
import Avatar from "../atoms/Avatar";

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
  user,
  auth,
  upvote,
  downvote,
  neturalize,
}) => {
  const navigate = useNavigate();

  const onTalkClick = () => {
    navigate(`/thread/${id}`);
  };

  const onTalkPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/thread/${id}`);
    }
  };

  const onUpvoteClick = () => upvote(id);

  const onDownvoteClick = () => downvote(id);

  const onNeturalizeClick = () => neturalize(id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
      <div
        role="button"
        tabIndex={0}
        className="cursor-pointer"
        onClick={onTalkClick}
        onKeyDown={onTalkPress}
      >
        <p className="text-md text-gray-500">
          #
          {category}
        </p>
        <h4 className="text-xl font-bold text-blue-500">{title}</h4>
        <p className="mt-2 text-gray-700 break-words">{body}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center">
          <VoteButton
            type="upvote"
            votes={upVotesBy}
            isVoted={upVotesBy.includes(auth)}
            onClick={onUpvoteClick}
            onNeturalizeClick={onNeturalizeClick}
            className="mr-4"
          />
          <VoteButton
            type="downvote"
            votes={downVotesBy}
            isVoted={downVotesBy.includes(auth)}
            onClick={onDownvoteClick}
            onNeturalizeClick={onNeturalizeClick}
            className="mr-4"
          />
        </div>
        <div className="flex items-center space-x-4 text-gray-500">
          <p className="flex items-center space-x-1">
            <BiMessageRoundedDots />
            <span className="text-gray-500">{totalComments}</span>
          </p>
          <p className="text-gray-500">{postedAt(createdAt)}</p>
          <p className="flex items-center space-x-1">
            <span className="text-gray-500">by</span>
            <Avatar
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-500">{user.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreadItem;
