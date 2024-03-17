import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveLeaderboardActionCreator } from '../leaderboards/action';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
        dispatch(showLoading());

        try {
            const users = await api.fetchUsers();
            const threads = await api.fetchThreads();
            const leaderboards = await api.fetchLeaderboard();

            dispatch(receiveUsersActionCreator(users));
            dispatch(receiveThreadsActionCreator(threads));
            dispatch(receiveLeaderboardActionCreator(leaderboards));
        } catch (error) {
            alert(error.message);
        }

        dispatch(hideLoading());
    };

export { asyncPopulateUsersAndThreads };
