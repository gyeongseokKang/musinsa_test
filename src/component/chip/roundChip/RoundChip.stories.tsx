import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import RoundChip from "./RoundChip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/chip/RoundChip",
  component: RoundChip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RoundChip>;

const Template: ComponentStory<typeof RoundChip> = (args) => (
  <RoundChip {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: "기본",
};
