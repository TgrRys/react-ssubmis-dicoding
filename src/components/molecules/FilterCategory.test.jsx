import { render, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import FilterCategory from "./FilterCategory";

describe("FilterCategory", () => {
  afterEach(cleanup);
  it("passes the correct props to Select component", () => {
    const categories = ["Category 1", "Category 2"];
    const onChange = vi.fn();

    const { getByLabelText } = render(
      <FilterCategory categories={categories} onChange={onChange} />,
    );

    const select = getByLabelText("Filter category by :");
    expect(select.children.length).toBe(categories.length);
    expect(Array.from(select.children).map((option) => option.value)).toEqual(
      categories,
    );
  });

  it("calls onChange when a category is selected", () => {
    const categories = ["perkenalan", "redux"];
    const onChange = vi.fn();

    const { getByTestId } = render(
      <FilterCategory categories={categories} onChange={onChange} />,
    );

    const select = getByTestId("filter-category-select");
    fireEvent.change(select, { target: { value: "perkenalan" } });

    expect(onChange).toHaveBeenCalled();
  });
});
