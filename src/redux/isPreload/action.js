import api from '../../utils/api';
import { setAuthUserActionCreator } from '../auth/action';

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload) => ({
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    });

const asyncPreloadProcess = () => async (dispatch) => {
        try {
            const authUser = await api.fetchOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            dispatch(setAuthUserActionCreator(null));
        } finally {
            dispatch(setIsPreloadActionCreator(false));
        }
    };

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
};
