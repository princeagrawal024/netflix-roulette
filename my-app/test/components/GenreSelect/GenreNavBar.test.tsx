import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GenreNavBar } from "@/components";

describe("GenreNavBar", () => {
  test("renders all genres passed in props", () => {
    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
    render(
      <GenreNavBar
        genres={genres}
        selectedGenre="ALL"
        onSelectCallBack={() => {}}
      />
    );

    // since <a> is used, query by role 'link' and accessible name
    genres.forEach((g) => {
      expect(screen.getByRole("link", { name: g })).toBeInTheDocument();
    });
  });

  test("highlights the selected genre", () => {
    const genres = ["ALL", "DOCUMENTARY", "COMEDY"];
    render(
      <GenreNavBar
        genres={genres}
        selectedGenre="COMEDY"
        onSelectCallBack={() => {}}
      />
    );
    const selected = screen.getByRole("link", { name: "COMEDY" });
    expect(selected).toHaveClass("active");

    // sanity-check that others are not highlighted
    expect(screen.getByRole("link", { name: "ALL" })).not.toHaveClass("active");
    expect(screen.getByRole("link", { name: "DOCUMENTARY" })).not.toHaveClass(
      "active"
    );
  });

  test("calls onSelectCallBack with correct genre on click", async () => {
    const user = userEvent.setup();
    const genres = ["ALL", "DOCUMENTARY", "COMEDY"];
    const onSelectCallBack = vi.fn();

    render(
      <GenreNavBar
        genres={genres}
        selectedGenre="ALL"
        onSelectCallBack={onSelectCallBack}
      />
    );

    const toClick = screen.getByRole("link", { name: "DOCUMENTARY" });
    await user.click(toClick);

    expect(onSelectCallBack).toHaveBeenCalledTimes(1);
    expect(onSelectCallBack).toHaveBeenCalledWith("DOCUMENTARY");
  });

  test("if invalid selected genre is sent then the component should not break", async () => {
    const genres = [
      "ALL",
      "DOCUMENTARY",
      "COMEDY",
      "THRILLER",
      "SUSPENSE",
      "DRAMA",
    ];
    const onSelectCallBack = vi.fn();

    render(
      <GenreNavBar
        genres={genres}
        selectedGenre="ACTION"
        onSelectCallBack={onSelectCallBack}
      />
    );

    genres.forEach((genre) => {
      const selected = screen.getByRole("link", { name: genre });
      expect(selected).not.toHaveClass("active");
    });

    expect(screen.queryByRole("link", { name: "ACTION" })).not.toBeInTheDocument();
  });
});
