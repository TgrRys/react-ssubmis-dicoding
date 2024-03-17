import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { asyncPopulateUsersAndThreads } from "./action";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveLeaderboardActionCreator } from "../leaderboards/action";

const fakeUsersResponse = [{ id: "user1" }, { id: "user2" }];
const fakeThreadsResponse = [{ id: "thread1" }, { id: "thread2" }];
const fakeLeaderboardResponse = [
  { id: "leaderboard1" },
  { id: "leaderboard2" },
];
const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncPopulateUsersAndThreads thunk", () => {
  beforeEach(() => {
    api.fetchUsers = vi.fn(() => Promise.resolve(fakeUsersResponse));
    api.fetchThreads = vi.fn(() => Promise.resolve(fakeThreadsResponse));
    api.fetchLeaderboard = vi.fn(() =>
      Promise.resolve(fakeLeaderboardResponse));
    global.alert = vi.fn();
  });

  afterEach(() => {
    delete global.alert;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboardResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    api.fetchUsers = vi.fn(() => Promise.reject(fakeErrorResponse));
    api.fetchThreads = vi.fn(() => Promise.reject(fakeErrorResponse));
    api.fetchLeaderboard = vi.fn(() => Promise.reject(fakeErrorResponse));

    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(global.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
