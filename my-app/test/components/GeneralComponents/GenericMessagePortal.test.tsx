import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GenericMessagePortal } from "@/components/GeneralComponent";

describe("GenericMessagePortal", () => {
  test("renders heading, message and success icon when isSuccess is true", () => {
    const mockCallback = () => {};
    render(
      <GenericMessagePortal
        heading="Success"
        message="Operation completed"
        isSuccess={true}
        showGenericMessagePortalCallback={mockCallback}
      />
    );

    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Operation completed")).toBeInTheDocument();
    const svg = document.querySelector(".sucess-failure-logo svg");
    expect(svg).toBeInTheDocument();
  });

  test("renders failure icon when isSuccess is false", () => {
    const mockCallback = () => {};
    render(
      <GenericMessagePortal
        heading="Error"
        message="Something went wrong"
        isSuccess={false}
        showGenericMessagePortalCallback={mockCallback}
      />
    );

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    const svg = document.querySelector(".sucess-failure-logo svg");
    expect(svg).toBeInTheDocument();
  });

  test("clicking close button calls showGenericMessagePortalCallback with cleared values", () => {
    const mockCallback = vi.fn();
    render(
      <GenericMessagePortal
        heading="Info"
        message="Dismiss me"
        isSuccess={true}
        showGenericMessagePortalCallback={mockCallback}
      />
    );

    const closeButton =
      screen.getByRole("button", { name: "X" }) || screen.getByText("X");
    fireEvent.click(closeButton);

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith("", "", false, false);
  });
});
