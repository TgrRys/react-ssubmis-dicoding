import { describe, expect, it } from "vitest";
import threadsReducer from "./reducer";
import { ActionType } from "./action";

describe("threadsReducer function", () => {
  const initialState = [
    {
      id: "thread-1",
      title: "Thread Test 1",
      body: "body thread test ke-1",
      category: "General",
      createdAt: "2022-09-22T10:06:55.588Z",
      ownerId: "user-1",
      upVotesBy: [],
      downVotesBy: [],
    },
  ];

  it("should handle RECEIVE_THREADS action", () => {
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: { threads: initialState },
    };

    const nextState = threadsReducer([], action);
    expect(nextState).toEqual(initialState);
  });

  it("should handle ADD_THREAD action", () => {
    const newThread = {
      id: "thread-2",
      title: "Thread Test 2",
      body: "body thread test ke-2",
      category: "Redux",
      createdAt: "2022-09-22T10:06:55.588Z",
      ownerId: "user-2",
      upVotesBy: [],
      downVotesBy: [],
    };

    const action = {
      type: ActionType.ADD_THREAD,
      payload: { thread: newThread },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual([newThread, ...initialState]);
  });

  it("should handle UPVOTE_THREAD action", () => {
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: { threadId: "thread-1", userId: "user-2" },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState[0].upVotesBy).toContain("user-2");
  });

  it("should handle UPVOTE_THREAD action when user has already upvoted", () => {
    const state = [{ ...initialState[0], upVotesBy: ["user-2"] }];
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: { threadId: "thread-1", userId: "user-2" },
    };

    const nextState = threadsReducer(state, action);
    expect(nextState[0].upVotesBy).not.toContain("user-2");
  });

  it("should handle DOWNVOTE_THREAD action", () => {
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: { threadId: "thread-1", userId: "user-2" },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState[0].downVotesBy).toContain("user-2");
  });

  it("should handle DOWNVOTE_THREAD action when user has already downvoted", () => {
    const state = [{ ...initialState[0], downVotesBy: ["user-2"] }];
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: { threadId: "thread-1", userId: "user-2" },
    };

    const nextState = threadsReducer(state, action);
    expect(nextState[0].downVotesBy).not.toContain("user-2");
  });

  it("should handle NEUTRALIZE_THREAD action", () => {
    const state = [
      {
        ...initialState[0],
        upVotesBy: ["user-2"],
        downVotesBy: ["user-3"],
      },
    ];
    const action = {
      type: ActionType.NETURALIZE_THREAD,
      payload: { threadId: "thread-1", userId: "user-2" },
    };

    const nextState = threadsReducer(state, action);
    expect(nextState[0].upVotesBy).not.toContain("user-2");
    expect(nextState[0].downVotesBy).toContain("user-3");
  });

  it("should return the current state when given an unknown action", () => {
    const action = { type: "UNKNOWN_ACTION" };
    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
