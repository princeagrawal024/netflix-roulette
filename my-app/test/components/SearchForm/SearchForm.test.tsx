import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SearchBar } from "@/components";
import { expect, vi } from "vitest";

describe("SearchBar", () => {
  const placeHolder = "What do you want to watch?";
  const searchQuery = "Pursuit of happyness";
  let onSearchCallback = () => {};

  test("Test component renders an input with correct value", () => {
    render(
      <MemoryRouter>
        <SearchBar
          inputSearchQuery={searchQuery}
          onSearchCallback={onSearchCallback}
          setDisplayAddMovieFormCallBack={() => {}}
        />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(placeHolder)).toBeInTheDocument();
    expect(screen.getByDisplayValue(searchQuery)).toBeInTheDocument();
  });

  test("Test clicking submit calls onSearchCallback", async () => {
    onSearchCallback = vi.fn();

    render(
      <MemoryRouter>
        <SearchBar
          inputSearchQuery=""
          onSearchCallback={onSearchCallback}
          setDisplayAddMovieFormCallBack={() => {}}
        />
      </MemoryRouter>
    );

    const input = screen.getByTestId("movie-search-box");
    const button = screen.getByTestId("movie-search-btn");

    await userEvent.type(input, "Comedy");
    await userEvent.click(button);

    expect(onSearchCallback).toHaveBeenCalledTimes(1);
    expect(onSearchCallback).toHaveBeenCalledWith("Comedy");
  });

  test("Test pressing Enter triggers onSearchCallback", async () => {
    onSearchCallback = vi.fn();

    render(
      <MemoryRouter>
        <SearchBar
          inputSearchQuery=""
          onSearchCallback={onSearchCallback}
          setDisplayAddMovieFormCallBack={() => {}}
        />
      </MemoryRouter>
    );

    const input = screen.getByTestId("movie-search-box");

    await userEvent.type(input, "Comedy{enter}");

    expect(onSearchCallback).toHaveBeenCalledTimes(1);
    expect(onSearchCallback).toHaveBeenCalledWith("Comedy");
  });
});
