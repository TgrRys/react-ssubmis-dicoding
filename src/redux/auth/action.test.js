import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as actions from "./action";
import api from "../../utils/api";

describe("auth actions", () => {
  beforeEach(() => {
    api._signIn = api.signIn;
    api._storeAccessToken = api.storeAccessToken;
    api._fetchOwnProfile = api.fetchOwnProfile;
  });

  afterEach(() => {
    api.signIn = api._signIn;
    api.storeAccessToken = api._storeAccessToken;
    api.fetchOwnProfile = api._fetchOwnProfile;

    delete api._signIn;
    delete api._storeAccessToken;
    delete api._fetchOwnProfile;
  });

  it("should create an action to set auth user", () => {
    const authUser = { id: "1", name: "Test User" };
    const expectedAction = {
      type: actions.ActionType.SET_AUTH_USER,
      payload: {
        auth: authUser,
      },
    };
    expect(actions.setAuthUserActionCreator(authUser)).toEqual(expectedAction);
  });

  it("should create an action to unset auth user", () => {
    const expectedAction = {
      type: actions.ActionType.UNSET_AUTH_USER,
      payload: {
        auth: null,
      },
    };
    expect(actions.unsetAuthUserActionCreator()).toEqual(expectedAction);
  });

  it("should execute async set auth user", async () => {
    const mockUser = { email: "test@example.com", password: "password" };
    const mockToken = "token";
    const mockAuthUser = { id: "1", name: "Test User" };

    // arrange
    api.signIn = () => Promise.resolve(mockToken);
    api.storeAccessToken = vi.fn();
    api.fetchOwnProfile = () => Promise.resolve(mockAuthUser);

    // action
    const thunk = actions.asyncSetAuthUser(mockUser);
    let action;
    await thunk((a) => {
      action = a;
    });

    // assert
    expect(action).toEqual({
      type: actions.ActionType.SET_AUTH_USER,
      payload: {
        auth: mockAuthUser,
      },
    });
  });

  it("should execute async unset auth user", async () => {
    // arrange
    api.storeAccessToken = vi.fn();

    // action
    const thunk = actions.asyncUnsetAuthUser();
    let action;
    await thunk((a) => {
      action = a;
    });

    // assert
    expect(action).toEqual({
      type: actions.ActionType.UNSET_AUTH_USER,
      payload: {
        auth: null,
      },
    });
  });
});
