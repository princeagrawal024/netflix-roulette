import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from '@/components'
import { expect } from "vitest";


describe("SearchBar", () => {
    const placeHolder = "What do you want to watch?";
    const searchQuery = "Pursuit of happyness";
    let onSearchCallback = () => { }

    test(
        "Test component renders an input with the value equal value passed in props", () => {
            render(<SearchBar inputSearchQuery={searchQuery} onSearchCallback={onSearchCallback} />);
            expect(screen.getByPlaceholderText(placeHolder)).toBeInTheDocument();
            expect(screen.getByDisplayValue(searchQuery)).toBeInTheDocument();
        })


    test(
        "Test after typing a click event on the Submit button, the onChange prop is called", async () => {
            onSearchCallback = vi.fn();
            render(<SearchBar searchQuery={null} onSearchCallback={onSearchCallback} />);

            let input = screen.getByRole("searchbox");
            let button = screen.getByRole("button", { name: "SEARCH" });

            await userEvent.type(input, "Comedy");
            await userEvent.click(button)

            expect(onSearchCallback).toHaveBeenCalledTimes(1)
            expect(onSearchCallback).toHaveBeenCalledWith("Comedy")
        })

    test(
        "Test after typing to input and pressing Enter, the onChange prop called with proper value", async () => {
            onSearchCallback = vi.fn();
            render(<SearchBar searchQuery={null} onSearchCallback={onSearchCallback} />);

            let input = screen.getByRole("searchbox");
            await userEvent.type(input, "Comedy{enter}");

            expect(onSearchCallback).toHaveBeenCalledTimes(1)
            expect(onSearchCallback).toHaveBeenCalledWith("Comedy")
        })

});