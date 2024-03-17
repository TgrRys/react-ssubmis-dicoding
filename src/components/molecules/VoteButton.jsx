import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const VoteButton = ({
 type, onClick, votes, isVoted, onNeutralizeClick, className,
}) => {
  const handleClick = () => {
    if (isVoted) {
      onNeutralizeClick();
    } else {
      onClick();
    }
  };

  const renderIcon = () => {
    if (type === "upvote") {
      return isVoted ? <Icon type="solidLike" className="text-blue-500" /> : <Icon type="like" />;
    } if (type === "downvote") {
      return isVoted ? <Icon type="solidDislike" className="text-blue-500" /> : <Icon type="dislike" />;
    }

    return null;
  };

  return (
    <Button onClick={handleClick} className={`${className} flex items-center space-x-1`}>
      {renderIcon()}
      <span className="text-gray-500">{votes.length}</span>
    </Button>
  );
};

export default VoteButton;
