import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../pages";
import { RecoilRoot } from "recoil";

describe("Home", () => {
  it("renders a TopBar", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    const topBar = screen.getByTestId("topBar");
    expect(topBar).toBeInTheDocument();
    expect(topBar).toHaveClass("sticky");
    expect(topBar.tagName).toBe("HEADER");
  });

  it("renders a filterChip when Roundchip clicked", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    fireEvent.click(screen.getByText(/단독상품/));
    fireEvent.click(screen.getByText(/품절포함/));
    expect(screen.getAllByTestId("rectangleChip")).toHaveLength(2);

    fireEvent.click(screen.getAllByText(/단독상품/)[0]);
    expect(screen.getAllByTestId("rectangleChip")).toHaveLength(1);
  });
});
