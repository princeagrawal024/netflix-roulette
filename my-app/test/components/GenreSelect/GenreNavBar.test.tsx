import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenreNavBar from "components/GenreSelect/GenreNavBar";

describe("GenreNavBar", () => {
    test("renders all genres passed in props", () => {
        const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
        render(
            <GenreNavBar
                genres={genres}
                selectedGenre="ALL"
                onSelectCallBack={() => { }}
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
                onSelectCallBack={() => { }}
            />
        );
        const selected = screen.getByRole("link", { name: "COMEDY" });
        expect(selected).toHaveClass("active");

        // sanity-check that others are not highlighted
        expect(screen.getByRole("link", { name: "ALL" })).not.toHaveClass("active");
        expect(screen.getByRole("link", { name: "DOCUMENTARY" })).not.toHaveClass("active");
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
});