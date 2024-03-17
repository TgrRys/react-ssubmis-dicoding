import userEvent from "@testing-library/user-event";
import { cleanup, render, screen } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CommentForm from "./CommentForm";

expect.extend(matchers);

describe("CommentForm component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle content typing correctly", async () => {
    // Arrange
    render(<CommentForm create={() => {}} auth />);
    const contentInput = await screen.getByPlaceholderText("Body");

    // Action
    await userEvent.type(contentInput, "contenttest");

    // Assert
    expect(contentInput).toHaveValue("contenttest");
  });

  it("should call create function when create button is clicked", async () => {
    // Arrange
    const mockCreate = vi.fn();
    render(<CommentForm create={mockCreate} auth />);
    const contentInput = await screen.getByPlaceholderText("Body");
    await userEvent.type(contentInput, "contenttest");
    const createButton = await screen.getByRole("button", { name: "Kirim" });

    // Action
    await userEvent.click(createButton);

    // Assert
    expect(mockCreate).toBeCalledWith("contenttest");
  });

  it("should display login link when auth is false", () => {
    // Arrange
    render(
      <MemoryRouter>
        <CommentForm create={() => {}} auth={false} />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
});
});
