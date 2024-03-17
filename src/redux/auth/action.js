import api from '../../utils/api';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
        type: ActionType.SET_AUTH_USER,
        payload: {
            auth: authUser,
        },
    });

const unsetAuthUserActionCreator = () => ({
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            auth: null,
        },
    });

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
        try {
            const token = await api.signIn({ email, password });
            api.storeAccessToken(token);
            const authUser = await api.fetchOwnProfile();

            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
    };

const asyncUnsetAuthUser = () => (dispatch) => {
        dispatch(unsetAuthUserActionCreator());
        api.storeAccessToken('');
    };

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
};
