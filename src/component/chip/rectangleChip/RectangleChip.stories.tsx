import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import RectangleChip from "./RectangleChip";

export default {
  title: "Component/chip/RectangleChip",
  component: RectangleChip,
} as ComponentMeta<typeof RectangleChip>;

const Template: ComponentStory<typeof RectangleChip> = (args) => (
  <div className="max-w-[50px]">
    <RectangleChip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "기본",
  leftItem: <div>X</div>,
};
