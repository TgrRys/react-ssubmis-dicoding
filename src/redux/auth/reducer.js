import { ActionType } from "./action";

const authUserReducer = (auth = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.auth;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return auth;
  }
};

export default authUserReducer;
