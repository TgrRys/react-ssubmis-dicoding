import CommentItem from "../molecules/CommentItem";

const CommentList = ({
  comments,
  auth,
  onUpvote,
  onDownvote,
  onNeturalize,
  className,
}) => (
  <div className={`${className} md:max-w-3xl`}>
    <h3 className="my-4 text-lg font-bold text-blue-500">
      Komentar (
      {comments.length}
      )
    </h3>
    {comments.map((comment) => (
      <CommentItem
        key={comment.id}
        {...comment}
        auth={auth}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onNeturalize={onNeturalize}
      />
      ))}
  </div>
  );

export default CommentList;
