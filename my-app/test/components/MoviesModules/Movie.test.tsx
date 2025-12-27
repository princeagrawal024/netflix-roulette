import { render, screen, waitFor } from "@testing-library/react";
import { Movie } from "@/components";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { MovieProvider } from "@/context/MovieContext";

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => ({
      totalAmount: 3000,
      data: [
        {
          id: 399055,
          title: "The Shape of Water",
          vote_average: 7.3,
          release_date: "2017-12-01",
          poster_path: "Image url",
          overview: "Overview",
          genres: ["Drama", "Fantasy", "Romance"],
          runtime: 123,
        },
      ],
      offset: 0,
      limit: 10,
    }),
  }) as any;
});

describe("Movie", () => {
  let sortBy = "title";
  let genre = "ACTION";
  let movieSearchString = "SOURCE CODE";
  let onEditCallback = vi.fn();
  let onDeleteCalback = vi.fn();

  const renderWithProvider = (component: React.ReactElement) => {
    return render(
      <MemoryRouter>
        <MovieProvider>{component}</MovieProvider>
      </MemoryRouter>
    );
  };

  test("Test1", async () => {
    renderWithProvider(
      <Movie
        sortBy={sortBy}
        genre={genre}
        movieSearchString={movieSearchString}
        onDeleteCalback={onDeleteCalback}
        onEditCallback={onEditCallback}
      ></Movie>
    );

    await waitFor(
      () => {
        expect(screen.getByText("The Shape of Water")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    expect(screen.getByText("2017")).toBeInTheDocument();
    expect(screen.getByText("Drama, Fantasy, Romance")).toBeInTheDocument();
    expect(screen.getByAltText("The Shape of Water poster")).toBeVisible();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "Image url");
    expect(image).toHaveAttribute("alt", "The Shape of Water poster");
  });
});
