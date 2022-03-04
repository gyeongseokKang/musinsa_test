import { render, screen } from "@testing-library/react";

import Home from "../pages";
import { RecoilRoot } from "recoil";

describe("Home", () => {
  render(
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
  it("renders a Home", () => {
    const image = screen.getByAltText("musinsa_logo");
    expect(image).toBeEmptyDOMElement();
  });
});
