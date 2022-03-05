import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import RoundChip from "./RoundChip";

export default {
  title: "Component/chip/RoundChip",
  component: RoundChip,
} as ComponentMeta<typeof RoundChip>;

const Template: ComponentStory<typeof RoundChip> = (args) => (
  <div className="max-w-[50px]">
    <RoundChip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "기본",
  isChecked: false,
};
