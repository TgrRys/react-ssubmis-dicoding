import { describe, expect, it } from "vitest";
import usersReducer from "./reducer";

describe("usersReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the list user when given by RECEIVE_USERS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_USERS",
      payload: {
        users: [
          {
            id: "bob_smith",
            name: "Bob Smith",
            email: "bob@example.com",
            avatar: "https://example.com/avatar1.jpg",
          },
          {
            id: "alice_johnson",
            name: "Alice Johnson",
            email: "alice@example.com",
            avatar: "https://example.com/avatar2.jpg",
          },
          {
            id: "charlie_brown",
            name: "Charlie Brown",
            email: "charlie@example.com",
            avatar: "https://example.com/avatar3.jpg",
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
