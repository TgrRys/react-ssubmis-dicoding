import { ActionType } from "./action";

const leaderboardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case ActionType.LEADERBOARD_USERS:
      return action.payload ? action.payload.leaderboards : leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
