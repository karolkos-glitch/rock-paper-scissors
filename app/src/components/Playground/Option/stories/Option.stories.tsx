import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Option from "..";

export default {
  title: "Option",
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Rock = Template.bind({});

Rock.args = {
  type: "ROCK",
};

export const Paper = Template.bind({});

Paper.args = {
  type: "PAPER",
};

export const Scissors = Template.bind({});

Scissors.args = {
  type: "SCISSORS",
};
