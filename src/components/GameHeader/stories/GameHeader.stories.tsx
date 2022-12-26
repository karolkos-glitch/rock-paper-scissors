import type { ComponentStory, ComponentMeta } from "@storybook/react";
import GameHeader from "..";

export default {
  title: "GameHeader",
  component: GameHeader,
} as ComponentMeta<typeof GameHeader>;

const Template: ComponentStory<typeof GameHeader> = () => <GameHeader />;

export const Story = Template.bind({});

Story.storyName = "GameHeader";
