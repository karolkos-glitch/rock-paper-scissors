import { render } from "@testing-library/react";
import GameHeader from "..";
import { getHeaderElements } from "./utils";

describe("<GameHeader />", () => {
  it("should render logo and title score", () => {
    render(<GameHeader />);

    getHeaderElements();
  });
});
