import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  asyncCreateThreadComment,
  asyncDownComment,
  asyncDownvoteThreadDetail,
  asyncNeturalizeComment,
  asyncNeturalizeThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpvoteComment,
  asyncUpvoteThreadDetail,
} from "../redux/threadDetail/action";
import CommentParrent from "../components/organisms/CommentParrent";
import CommentForm from "../components/molecules/CommentForm";
import CommentList from "../components/organisms/CommentList";

const DetailPage = () => {
  const { id } = useParams();
  const { threadDetail = null, auth } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  const threadDetailJoin = {
    ...threadDetail,
    auth: auth ? auth.id : null,
  };

  const upvoteOnDetil = () => dispatch(asyncUpvoteThreadDetail());

  const downvoteOnDetail = () => dispatch(asyncDownvoteThreadDetail());

  const neturalizeOnDetail = () => dispatch(asyncNeturalizeThreadDetail());

  const onCreateComment = (content) =>
    auth && dispatch(asyncCreateThreadComment(content));

  const upvoteOnComment = (commentId) =>
    dispatch(asyncUpvoteComment(commentId));

  const downvoteOnComment = (commentId) =>
    dispatch(asyncDownComment(commentId));

  const neturalizeOnComment = (commentId) =>
    dispatch(asyncNeturalizeComment(commentId));

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <CommentParrent
        {...threadDetailJoin}
        onUpvote={upvoteOnDetil}
        onDownvote={downvoteOnDetail}
        onNeturalize={neturalizeOnDetail}
        className="w-full max-w-2xl mt-4 p-4 bg-white rounded-lg shadow-md"
      />
      <CommentForm
        create={onCreateComment}
        auth={auth}
        className="w-full max-w-2xl mt-4 p-4 bg-white rounded-lg shadow-md"
      />
      <CommentList
        {...threadDetailJoin}
        onUpvote={upvoteOnComment}
        onDownvote={downvoteOnComment}
        onNeturalize={neturalizeOnComment}
        className="w-full max-w-2xl my-4 p-4 bg-white rounded-lg shadow-md"
      />
    </section>
  );
};

export default DetailPage;
