import type { ComponentStory, ComponentMeta } from "@storybook/react";
import GameWrapper from "..";
import GameHeader from "../../GameHeader";
import Playground from "../../Playground";

export default {
  title: "GameWrapper",
  component: GameWrapper,
} as ComponentMeta<typeof GameWrapper>;

const Template: ComponentStory<typeof GameWrapper> = (args) => (
  <GameWrapper {...args} />
);

export const Story = Template.bind({});

Story.storyName = "GameWrapper";

Story.args = {
  headerComponent: <GameHeader />,
  children: <Playground />,
};
