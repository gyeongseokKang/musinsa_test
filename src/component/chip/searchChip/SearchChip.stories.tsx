import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import SearchChip from "./SearchChip";

export default {
  title: "Component/chip/SearchChip",
  component: SearchChip,
} as ComponentMeta<typeof SearchChip>;

const Template: ComponentStory<typeof SearchChip> = (args) => (
  <div className="max-w-[50px]">
    <SearchChip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  isChecked: false,
  isFocused: false,
};
