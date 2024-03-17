import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { checkAuth } from '../../utils/helpers';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
    UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
    DOWNVOTE_THREAD_DETAIL: 'DOWNVOTE_THREAD_DETAIL',
    NETURALIZE_THREAD_DETAIL: 'NETURALIZE_THREAD_DETAIL',
    CREATE_THREAD_COMMENT: 'CREATE_THREAD_COMMENT',
    UPVOTE_THREAD_COMMENT: 'UPVOTE_THREAD_COMMENT',
    DOWNVOTE_THREAD_COMMENT: 'DOWNVOTE_THREAD_COMMENT',
    NETURALIZE_THREAD_COMMENT: 'NETURALIZE_THREAD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            threadDetail,
        },
    };
}

function clearThreadDetailActionCreator() {
    return {
        type: ActionType.CLEAR_THREAD_DETAIL,
    };
}

function upvoteThreadDetailActionCreator(userId) {
    return {
        type: ActionType.UPVOTE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function downvoteThreadDetailActionCreator(userId) {
    return {
        type: ActionType.DOWNVOTE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function neturalizeThreadDetailActionCreator(userId) {
    return {
        type: ActionType.NETURALIZE_THREAD_DETAIL,
        payload: {
            userId,
        },
    };
}

function createThreadCommentActionCreator(comment) {
    return {
        type: ActionType.CREATE_THREAD_COMMENT,
        payload: {
            comment,
        },
    };
}

function upvoteThreadCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.UPVOTE_THREAD_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function downvoteThreadCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.DOWNVOTE_THREAD_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function neturalizeThreadCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.NETURALIZE_THREAD_COMMENT,
        payload: {
            commentId,
            userId,
        },
    };
}

function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());

        dispatch(clearThreadDetailActionCreator());
        try {
            const threadDetail = await api.initiateThread(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }

        dispatch(hideLoading());
    };
}

function asyncUpvoteThreadDetail() {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(upvoteThreadDetailActionCreator(auth.id));
        try {
            await api.likeThread(threadDetail.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownvoteThreadDetail() {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(downvoteThreadDetailActionCreator(auth.id));
        try {
            await api.dislikeThread(threadDetail.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeturalizeThreadDetail() {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        dispatch(neturalizeThreadDetailActionCreator(auth.id));
        try {
            await api.neturalThread(threadDetail.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncCreateThreadComment(content) {
    return async (dispatch, getState) => {
        const { threadDetail } = getState();
        try {
            const comment = await api.createThreadComment({ threadId: threadDetail.id, content });
            dispatch(createThreadCommentActionCreator(comment));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpvoteComment(commentId) {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(upvoteThreadCommentActionCreator({ commentId, userId: auth.id }));
        try {
            await api.likeComment({ threadId: threadDetail.id, commentId });
        } catch (error) {
            alert(error.message);
            dispatch(neturalizeThreadCommentActionCreator({ commentId, userId: auth.id }));
        }
    };
}

function asyncDownComment(commentId) {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(downvoteThreadCommentActionCreator({ commentId, userId: auth.id }));
        try {
            await api.dislikeComment({ threadId: threadDetail.id, commentId });
        } catch (error) {
            alert(error.message);
            dispatch(neturalizeThreadCommentActionCreator({ commentId, userId: auth.id }));
        }
    };
}

function asyncNeturalizeComment(commentId) {
    return async (dispatch, getState) => {
        const { threadDetail, auth } = getState();
        dispatch(neturalizeThreadCommentActionCreator({ commentId, userId: auth.id }));
        try {
            await api.likeComment({ threadId: threadDetail.id, commentId });
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    upvoteThreadDetailActionCreator,
    downvoteThreadDetailActionCreator,
    neturalizeThreadDetailActionCreator,
    asyncReceiveThreadDetail,
    asyncUpvoteThreadDetail,
    asyncDownvoteThreadDetail,
    asyncNeturalizeThreadDetail,
    asyncCreateThreadComment,
    asyncUpvoteComment,
    asyncDownComment,
    asyncNeturalizeComment,
};
