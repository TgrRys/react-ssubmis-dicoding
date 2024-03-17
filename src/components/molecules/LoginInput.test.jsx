import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from "react-router-dom";
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    // Arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText("Email");

    // Action
    await userEvent.type(emailInput, "emailtest");

    // Assert
    expect(emailInput).toHaveValue("emailtest");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>,
    );
    const passwordInput = await screen.getByPlaceholderText("Password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <MemoryRouter>
        <LoginInput login={mockLogin} />
      </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "emailtest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: "emailtest",
      password: "passwordtest",
    });
  });

  it("should display register link", () => {
    // Arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
  });
});
