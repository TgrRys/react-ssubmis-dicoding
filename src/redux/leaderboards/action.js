const ActionType = {
    LEADERBOARD_USERS: 'LEADERBOARD_USERS',
};

const receiveLeaderboardActionCreator = (leaderboards) => ({
        type: ActionType.LEADERBOARD_USERS,
        payload: {
            leaderboards,
        },
    });

export {
    ActionType,
    receiveLeaderboardActionCreator,
};
