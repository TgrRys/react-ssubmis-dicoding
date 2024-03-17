import { afterEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import * as actions from "./action";

describe("action creators", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should create an action to receive users", () => {
    const users = [{ id: "user1" }, { id: "user2" }];
    const expectedAction = {
      type: actions.ActionType.RECEIVE_USERS,
      payload: { users },
    };
    expect(actions.receiveUsersActionCreator(users)).toEqual(expectedAction);
  });
});
