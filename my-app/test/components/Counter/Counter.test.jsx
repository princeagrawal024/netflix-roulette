import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "components/Counter/Counter";
import { expect, test } from "vitest";


describe("Counter", () => {

    let initialValue = 10;

    test("Counter: Test that component renders initial value provided in props", () => {
        render(<Counter initialValue={initialValue} />);
        expect(screen.getByText(initialValue)).toBeInTheDocument()
    })

    test("Counter: Test that a click event on decrement button decrements the displayed value", async () => {
        render(<Counter initialValue={initialValue} />);
        let decrementBtn = screen.getByRole("button", { name: "-" });
        await userEvent.click(decrementBtn);
        await userEvent.click(decrementBtn);

        expect(screen.getByText(8)).toBeInTheDocument()
    })

    test("Counter: Test that a click event on increment button increments the displayed value", async () => {
        render(<Counter initialValue={initialValue} />);
        let incrementBtn = screen.getByRole("button", { name: "+" });
        await userEvent.click(incrementBtn);
        await userEvent.click(incrementBtn);
        await userEvent.click(incrementBtn);

        expect(screen.getByText(13)).toBeInTheDocument()

    })


});