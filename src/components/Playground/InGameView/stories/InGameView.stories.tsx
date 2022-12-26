import type { ComponentStory, ComponentMeta } from "@storybook/react";
import InGameView from "..";
import Option from "@rps/components/Playground/Option";

export default {
  title: "InGameView",
  component: InGameView,
} as ComponentMeta<typeof InGameView>;

const Template: ComponentStory<typeof InGameView> = () => (
  <InGameView
    renderOption={(option) => <Option type={option} />}
  />
);

export const Story = Template.bind({});

Story.storyName = "InGameView";
