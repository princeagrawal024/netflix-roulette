import { render, screen } from "@testing-library/react";
import { MovieTile } from "@/components";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { extractYear } from "@/utils";

describe("MovieTiles", () => {
  let imageUrl = "image-url";
  let movieName = "movie-name";
  let releaseYear = "2016-02-11";
  let relevantGenres = ["comedy", "crime"];
  let movieId = "movie-id";
  let formatterDate = extractYear(releaseYear);
  test("renders movie details with title, year, genres, and poster image", () => {
    render(
      <MemoryRouter>
        <MovieTile
          imageUrl={imageUrl}
          movieName={movieName}
          releaseYear={releaseYear}
          relevantGenres={relevantGenres}
          movieId={movieId}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(movieName)).toBeInTheDocument();
    expect(screen.getByText(formatterDate)).toBeInTheDocument();
    expect(screen.getByText("comedy, crime")).toBeInTheDocument();
    expect(screen.getByAltText("movie-name poster")).toBeVisible();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", imageUrl);
    expect(image).toHaveAttribute("alt", "movie-name poster");
  });
});
