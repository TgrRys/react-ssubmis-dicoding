import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        isPreload: isPreloadReducer,
        users: usersReducer,
        threads: threadsReducer,
        leaderboards: leaderboardsReducer,
        threadDetail: threadDetailReducer,
        loadingBar: loadingBarReducer,
    },
});

export default store;
