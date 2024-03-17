import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { checkAuth } from '../../utils/helpers/index';
import api from '../../utils/api/index';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    UPVOTE_THREAD: 'UPVOTE_THREAD',
    DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
    NETURALIZE_THREAD: 'NETURALIZE_THREAD',
};

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread,
        },
    };
}

function upvoteThreadActionCreator({ threadId, userId }) {
    return {
        type: ActionType.UPVOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function downvoteThreadActionCreator({ threadId, userId }) {
    return {
        type: ActionType.DOWNVOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function neturalizeThreadActionCreator({ threadId, userId }) {
    return {
        type: ActionType.NETURALIZE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncAddThread({ title, body = '', category }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const talk = await api.postComment({ title, body, category });
            dispatch(addThreadActionCreator(talk));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncUpvoteThread(threadId) {
    return async (dispatch, getState) => {
        const { auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(upvoteThreadActionCreator({ threadId, userId: auth.id }));
        try {
            await api.likeThread(threadId);
        } catch (error) {
            alert(error.message);
            dispatch(neturalizeThreadActionCreator({ threadId, userId: auth.id }));
        }
    };
}

function asyncDownvoteThread(threadId) {
    return async (dispatch, getState) => {
        const { auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(downvoteThreadActionCreator({ threadId, userId: auth.id }));
        try {
            await api.dislikeThread(threadId);
        } catch (error) {
            alert(error.message);
            dispatch(neturalizeThreadActionCreator({ threadId, userId: auth.id }));
        }
    };
}

function asyncNeturalizeThread(threadId) {
    return async (dispatch, getState) => {
        const { auth } = getState();
        if (!checkAuth(auth)) return;

        dispatch(neturalizeThreadActionCreator({ threadId, userId: auth.id }));
        try {
            await api.neturalThread(threadId);
        } catch (error) {
            alert(error.message);
            dispatch(neturalizeThreadActionCreator({ threadId, userId: auth.id }));
        }
    };
}

export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncAddThread,
    asyncUpvoteThread,
    asyncDownvoteThread,
    asyncNeturalizeThread,
};
