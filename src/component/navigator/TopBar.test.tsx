import { render, screen } from "@testing-library/react";

import TopBar from "./TopBar";

describe("Topbar Test", () => {
  render(<TopBar />);
  it("renders a App logo", () => {
    const image = screen.getByAltText("musinsa_logo");
    expect(image).toBeVisible();
  });
});
