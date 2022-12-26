import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Result from "..";

export default {
  title: "Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => (
  <Result {...args}>
    <button>Try Again</button>
  </Result>
);

export const Draw = Template.bind({});

Draw.args = {
  result: "DRAW",
};

export const UserWon = Template.bind({});

UserWon.args = {
  result: "USER_WIN",
};

export const UserLost = Template.bind({});

UserLost.args = {
  result: "HOUSE_WIN",
};
