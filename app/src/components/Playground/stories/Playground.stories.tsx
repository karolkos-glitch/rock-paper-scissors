import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Playground from "..";

export default {
  title: "Playground",
  component: Playground,
} as ComponentMeta<typeof Playground>;

const Template: ComponentStory<typeof Playground> = () => <Playground />;

export const Story = Template.bind({});

Story.storyName = "Playground";
