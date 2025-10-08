import React, { useState } from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import JSXCounter from "components/Counter/JSXCounter";
import { expect } from "vitest";

test("Test increment function", () => {
     const [currentValue, setValue] = useState(10);
     increment();
     expect(currentValue).toBe(10);   
});

