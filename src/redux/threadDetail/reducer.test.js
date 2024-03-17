import { describe, expect, it } from "vitest";
import threadDetailReducer from "./reducer";
import { ActionType } from "./action";

describe("threadDetailReducer", () => {
  it("should return the initial state", () => {
    expect(threadDetailReducer(undefined, {})).toBe(null);
  });

  it("should handle RECEIVE_THREAD_DETAIL", () => {
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: { threadDetail: { id: "thread1" } },
    };
    expect(threadDetailReducer(null, action)).toEqual({ id: "thread1" });
  });

  it("should handle CLEAR_THREAD_DETAIL", () => {
    const action = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };
    expect(threadDetailReducer({ id: "thread1" }, action)).toBe(null);
  });

  it("should handle UPVOTE_THREAD_DETAIL", () => {
    const action = {
      type: ActionType.UPVOTE_THREAD_DETAIL,
      payload: { userId: "user1" },
    };
    const threadDetail = {
      id: "thread1",
      upVotesBy: ["user2"],
      downVotesBy: [],
    };
    expect(threadDetailReducer(threadDetail, action)).toEqual({
      id: "thread1",
      upVotesBy: ["user2", "user1"],
      downVotesBy: [],
    });
  });

  it("should handle DOWNVOTE_THREAD_DETAIL", () => {
    const action = {
      type: ActionType.DOWNVOTE_THREAD_DETAIL,
      payload: { userId: "user1" },
    };
    const threadDetail = {
      id: "thread1",
      upVotesBy: [],
      downVotesBy: ["user2"],
    };
    expect(threadDetailReducer(threadDetail, action)).toEqual({
      id: "thread1",
      upVotesBy: [],
      downVotesBy: ["user2", "user1"],
    });
  });

    it("should handle NETURALIZE_THREAD_DETAIL", () => {
        const action = {
        type: ActionType.NETURALIZE_THREAD_DETAIL,
        payload: { userId: "user1" },
        };
        const threadDetail = {
        id: "thread1",
        upVotesBy: ["user1"],
        downVotesBy: ["user1"],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual({
        id: "thread1",
        upVotesBy: [],
        downVotesBy: [],
        });
    });

    it("should handle CREATE_THREAD_COMMENT", () => {
        const action = {
        type: ActionType.CREATE_THREAD_COMMENT,
        payload: { comment: { id: "comment1" } },
        };
        const threadDetail = {
        id: "thread1",
        comments: [{ id: "comment2" }],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual({
        id: "thread1",
        comments: [{ id: "comment1" }, { id: "comment2" }],
        });
    });

    it("should handle UPVOTE_THREAD_COMMENT", () => {
        const action = {
        type: ActionType.UPVOTE_THREAD_COMMENT,
        payload: { userId: "user1", commentId: "comment1" },
        };
        const threadDetail = {
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: ["user2"], downVotesBy: [] },
        ],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual({
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: ["user2", "user1"], downVotesBy: [] },
        ],
        });
    });

    it("should handle DOWNVOTE_THREAD_COMMENT", () => {
        const action = {
        type: ActionType.DOWNVOTE_THREAD_COMMENT,
        payload: { userId: "user1", commentId: "comment1" },
        };
        const threadDetail = {
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: [], downVotesBy: ["user2"] },
        ],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual({
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: [], downVotesBy: ["user2", "user1"] },
        ],
        });
    });

    it("should handle NETURALIZE_THREAD_COMMENT", () => {
        const action = {
        type: ActionType.NETURALIZE_THREAD_COMMENT,
        payload: { userId: "user1", commentId: "comment1" },
        };
        const threadDetail = {
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: ["user1"], downVotesBy: ["user1"] },
        ],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual({
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: [], downVotesBy: [] },
        ],
        });
    });

    it("should handle unknown action type", () => {
        const action = {
        type: "UNKNOWN_ACTION",
        };
        const threadDetail = {
        id: "thread1",
        comments: [
            { id: "comment1", upVotesBy: ["user1"], downVotesBy: ["user1"] },
        ],
        };
        expect(threadDetailReducer(threadDetail, action)).toEqual(threadDetail);
    });
});
