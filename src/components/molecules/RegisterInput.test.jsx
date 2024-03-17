import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import RegisterInput from "./RegisterInput";

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Name");

    // Action
    await userEvent.type(nameInput, "nametest");

    // Assert
    expect(nameInput.value).to.equal("nametest");
  });

  it("should handle email typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    // Action
    await userEvent.type(emailInput, "emailtest");

    // Assert
    expect(emailInput.value).to.equal("emailtest");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput.value).to.equal("passwordtest");
  });

  it("should call register function when register button is clicked", async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "nametest");
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "emailtest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: "nametest",
      email: "emailtest",
      password: "passwordtest",
    });
  });
});
