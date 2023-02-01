import { render, screen } from "@testing-library/react";
import { getHeaderElements } from "@rps/components/GameHeader/tests/utils";
import { getStarterPlaygroundComponents } from "@rps/components/Playground/tests/utils";
import App from "../App";

describe("<App />", () => {
  it("should render the header and the playground", () => {
    render(<App />);

    expect(screen.getAllByRole("button")).toHaveLength(4);
    getHeaderElements();
    getStarterPlaygroundComponents();
  });
});
