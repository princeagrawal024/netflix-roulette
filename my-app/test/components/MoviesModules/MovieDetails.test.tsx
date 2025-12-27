import { render, screen } from "@testing-library/react";
import { MovieDetails } from "@/components";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { extractYear } from "@/utils";
import { vi } from "vitest";

describe("test MovieDetails Component", () => {
  const imageUrl = "image-url";
  const name = "movie-name";
  const releaseYear = "2018-03-28";
  const runtime = "118";
  const rating = "7.8";
  const relevantGenres = ["CRIME", "SUSPENSE"];
  const overview = "movie-overview";
  const movieId = "123123";

  test("Test movie details component rendering properly", () => {
    render(
      <MemoryRouter>
        <MovieDetails
          imageUrl={imageUrl}
          name={name}
          releaseYear={extractYear(releaseYear)}
          runtime={runtime}
          rating={rating}
          relevantGenres={relevantGenres}
          overview={overview}
          movieId={movieId}
        ></MovieDetails>
      </MemoryRouter>
    );
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(rating)).toBeInTheDocument();
    expect(screen.getByText("CRIME, SUSPENSE")).toBeInTheDocument();
    expect(screen.getByText("2018")).toBeInTheDocument();
    expect(screen.getByText(overview)).toBeInTheDocument();
    expect(screen.getByText("1h 58min")).toBeInTheDocument();

    let imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", imageUrl);
    expect(imageElement).toHaveAttribute("alt", name.concat(" poster"));
  });
});
