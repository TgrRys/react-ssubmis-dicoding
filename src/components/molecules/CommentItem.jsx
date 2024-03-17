import VoteButton from "./VoteButton";
import { postedAt } from "../../utils/helpers";

const CommentItem = ({
  id,
  owner,
  content,
  upVotesBy,
  downVotesBy,
  createdAt,
  onUpvote,
  onDownvote,
  onNeturalize,
  auth,
  className,
}) => (
  <div className={`${className} md:max-w-3xl`}>
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <img
        src={owner.avatar}
        alt={owner.name}
        title={owner.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <b className="font-bold">{owner.name}</b>
        <small className="block text-gray-400">{postedAt(createdAt)}</small>
      </div>
    </div>
    <p className="mt-2 text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: content }} />
    <div className="flex items-center justify-start my-4 space-x-4">
      <VoteButton
        type="upvote"
        votes={upVotesBy}
        isVoted={upVotesBy.includes(auth)}
        onClick={() => onUpvote(id)}
        onNeturalizeClick={() => onNeturalize(id)}
      />
      <VoteButton
        type="downvote"
        votes={downVotesBy}
        isVoted={downVotesBy.includes(auth)}
        onClick={() => onDownvote(id)}
        onNeturalizeClick={() => onNeturalize(id)}
      />
    </div>
  </div>
  );

export default CommentItem;
