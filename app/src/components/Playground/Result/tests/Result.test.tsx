import { render } from "@testing-library/react";
import Result from "..";

describe("<Result />", () => {
  it("smoke test - result is null", () => {
    const { asFragment } = render(<Result result={null} />);

    expect(asFragment()).toMatchInlineSnapshot("<DocumentFragment />");
  });

  it('smoke test - result is "DRAW"', () => {
    const { asFragment } = render(<Result result={"DRAW"} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col justify-center items-center"
        >
          <div
            class="text-white text-3xl"
          >
            DRAW
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('smoke test - reusult is "USER_WIN"', () => {
    const { asFragment } = render(<Result result={"USER_WIN"} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col justify-center items-center"
        >
          <div
            class="text-white text-3xl"
          >
            YOU WIN
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('smoke test - result is "HOUSE_WIN"', () => {
    const { asFragment } = render(<Result result={"HOUSE_WIN"} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col justify-center items-center"
        >
          <div
            class="text-white text-3xl"
          >
            YOU LOOSE
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
