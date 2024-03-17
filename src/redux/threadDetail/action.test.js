import { describe, expect, it } from "vitest";
import {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upvoteThreadDetailActionCreator,
  downvoteThreadDetailActionCreator,
  neturalizeThreadDetailActionCreator,
} from "./action";

describe("Action Creators", () => {
  it("should create an action to receive thread detail", () => {
    const threadDetail = {};
    const expectedAction = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail,
      },
    };
    expect(receiveThreadDetailActionCreator(threadDetail)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to clear thread detail", () => {
    const expectedAction = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };
    expect(clearThreadDetailActionCreator()).toEqual(expectedAction);
  });

  it("should create an action to upvote thread detail", () => {
    const userId = "1";
    const expectedAction = {
      type: ActionType.UPVOTE_THREAD_DETAIL,
      payload: {
        userId,
      },
    };
    expect(upvoteThreadDetailActionCreator(userId)).toEqual(expectedAction);
  });

  it("should create an action to downvote thread detail", () => {
    const userId = "1";
    const expectedAction = {
      type: ActionType.DOWNVOTE_THREAD_DETAIL,
      payload: {
        userId,
      },
    };
    expect(downvoteThreadDetailActionCreator(userId)).toEqual(expectedAction);
  });

  it("should create an action to neturalize thread detail", () => {
    const userId = "1";
    const expectedAction = {
      type: ActionType.NETURALIZE_THREAD_DETAIL,
      payload: {
        userId,
      },
    };
    expect(neturalizeThreadDetailActionCreator(userId)).toEqual(expectedAction);
  });
});
