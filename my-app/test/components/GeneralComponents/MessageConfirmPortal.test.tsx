import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageConfirmPortal from "@/components/GeneralComponent/MessageConfirmPortal";
import { MovieProvider } from "@/context/MovieContext";

describe("MessageConfirmPortal", () => {
  const mockShowCallback = vi.fn();
  const mockSetShowCallback = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProvider = (component: React.ReactElement) => {
    return render(<MovieProvider>{component}</MovieProvider>);
  };

  it("renders heading, message and warning icon", () => {
    renderWithProvider(
      <MessageConfirmPortal
        heading="Delete Movie"
        message="Are you sure?"
        movieId="1"
        showGenericMessagePortalCallback={mockShowCallback}
        setShowDeleteMovieWarningCallback={mockSetShowCallback}
      />
    );

    expect(screen.getByText("Delete Movie")).toBeInTheDocument();
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    const warningIcon = document.querySelector(".warning-logo svg");
    expect(warningIcon).toBeInTheDocument();
  });

  it("calls setShowDeleteMovieWarningCallback with false when close button is clicked", () => {
    renderWithProvider(
      <MessageConfirmPortal
        heading="Delete Movie"
        message="Are you sure?"
        movieId="1"
        showGenericMessagePortalCallback={mockShowCallback}
        setShowDeleteMovieWarningCallback={mockSetShowCallback}
      />
    );

    const closeButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(closeButton);
    expect(mockSetShowCallback).toHaveBeenCalledTimes(1);
    expect(mockSetShowCallback).toHaveBeenCalledWith(false);
  });

  it("renders CONFIRM button", () => {
    renderWithProvider(
      <MessageConfirmPortal
        heading="Delete Movie"
        message="Are you sure?"
        movieId="1"
        showGenericMessagePortalCallback={mockShowCallback}
        setShowDeleteMovieWarningCallback={mockSetShowCallback}
      />
    );

    const confirmButton = screen.getByRole("button", { name: "CONFIRM" });
    expect(confirmButton).toBeInTheDocument();
  });
});
