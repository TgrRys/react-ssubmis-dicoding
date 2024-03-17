import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api/index';

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users,
        },
    };
}

function asyncRegisterUser({ name, email, password }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.signUp({ name, email, password });
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
};
