import { describe, expect, it } from "vitest";
import leaderboardsReducer from "./reducer";
import { ActionType } from "./action";

describe("Testing leaderboardsReducer", () => {
  it("should maintain the initial state when an unknown action type is provided", () => {
    const initialState = [];
    const unknownAction = { type: "UNKNOWN_ACTION" };

    const resultState = leaderboardsReducer(initialState, unknownAction);

    expect(resultState).toEqual(initialState);
  });

  it("should update the state with leaderboard data when LEADERBOARD_USERS action is dispatched", () => {
    const initialState = [];
    const leaderboardUsersAction = {
      type: ActionType.LEADERBOARD_USERS,
      payload: {
        leaderboards: [
          {
            user: {
              id: "user1",
              name: "User One",
              email: "userone@example.com",
              avatar: "https://example.com/userone.jpg",
            },
            score: 100,
          },
          {
            user: {
              id: "user2",
              name: "User Two",
              email: "usertwo@example.com",
              avatar: "https://example.com/usertwo.jpg",
            },
            score: 50,
          },
        ],
      },
    };

    const resultState = leaderboardsReducer(
      initialState,
      leaderboardUsersAction,
    );

    expect(resultState).toEqual(leaderboardUsersAction.payload.leaderboards);
  });

  it("should not modify the state when an action without a payload is dispatched", () => {
    const initialState = ["existing", "state"];
    const actionWithoutPayload = { type: ActionType.LEADERBOARD_USERS };

    const resultState = leaderboardsReducer(initialState, actionWithoutPayload);

    expect(resultState).toEqual(initialState);
  });
});
