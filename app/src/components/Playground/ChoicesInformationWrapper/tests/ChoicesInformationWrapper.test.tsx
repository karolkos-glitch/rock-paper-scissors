import { render } from "@testing-library/react";
import ChoicesInformationWrapper from "..";

describe("<ChoicesInformationWrapper />", () => {
  it("smoke test - no userChoice and houseChoice", () => {
    const { asFragment } = render(
      <ChoicesInformationWrapper userChoice={null} houseChoice={null} />
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="grid grid-flow-col justify-center items-center gap-16 m-w-full"
        >
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              YOU PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] bg-bg-2"
            />
          </div>
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              THE HOUSE PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] bg-bg-2"
            />
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it("smoke test - userChoice and no houseChocie", () => {
    const { asFragment } = render(
      <ChoicesInformationWrapper userChoice={"PAPER"} houseChoice={null} />
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="grid grid-flow-col justify-center items-center gap-16 m-w-full"
        >
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              YOU PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] flex justify-center items-center bg-white"
              style="border: 16px solid hsl(230, 89%, 62%);"
            >
              <figure>
                <img
                  alt="Option - PAPER"
                  src="/icon-paper.svg"
                />
              </figure>
            </div>
          </div>
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              THE HOUSE PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] bg-bg-2"
            />
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it("smoke test - userChoice, houseChoice, and children", () => {
    const { asFragment } = render(
      <ChoicesInformationWrapper userChoice={"ROCK"} houseChoice={"SCISSORS"}>
        Some children of the component
      </ChoicesInformationWrapper>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="grid grid-flow-col justify-center items-center gap-16 m-w-full"
        >
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              YOU PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] flex justify-center items-center bg-white"
              style="border: 16px solid hsl(349, 71%, 52%);"
            >
              <figure>
                <img
                  alt="Option - ROCK"
                  src="/icon-rock.svg"
                />
              </figure>
            </div>
          </div>
          <div
            class="mx-4 text-center row-start-2 row-end-3 col-start-1 col-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3"
          >
            Some children of the component
          </div>
          <div>
            <div
              class="text-center my-8 text-xl"
            >
              THE HOUSE PICKED
            </div>
            <div
              class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-[50%] flex justify-center items-center bg-white"
              style="border: 16px solid hsl(39, 89%, 49%);"
            >
              <figure>
                <img
                  alt="Option - SCISSORS"
                  src="/icon-scissors.svg"
                />
              </figure>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
