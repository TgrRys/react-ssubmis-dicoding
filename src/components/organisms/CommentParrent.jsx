import VoteButton from "../molecules/VoteButton";
import { postedAt } from "../../utils/helpers";

const CommentParrent = ({
  id,
  category,
  body,
  upVotesBy,
  downVotesBy,
  owner,
  createdAt,
  title,
  auth,
  onUpvote,
  onDownvote,
  onNeturalize,
  className,
}) => (
  <div className={`${className} md:max-w-3xl`}>
    <div className="col-span-2 my-4">
      <p className="text-sm text-gray-500 mb-2">
        #
        {category}
      </p>
      <h1 className="text-2xl font-bold text-blue-500">{title}</h1>
    </div>
    <p className="text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: body }} />
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-4">
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
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <img
          src={owner.avatar}
          alt={owner.name}
          title={owner.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold">{owner.name}</span>
          <small>
            Pada
            {postedAt(createdAt)}
          </small>
        </div>
      </div>
    </div>
  </div>
  );

export default CommentParrent;
