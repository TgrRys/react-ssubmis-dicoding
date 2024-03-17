import ThreadItem from "../molecules/ThreadItem";

const ThreadList = ({
 threads, onUpvote, onDownvote, onNeturalize, className,
}) => (
  <div className={`${className} space-y-4`}>
    {threads.map((thread) => (
      <ThreadItem
        key={thread.id}
        {...thread}
        upvote={onUpvote}
        downvote={onDownvote}
        neturalize={onNeturalize}
      />
      ))}
  </div>
  );

export default ThreadList;
