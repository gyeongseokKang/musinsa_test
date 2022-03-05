import { ComponentMeta, ComponentStory } from "@storybook/react";

import HorizontalDivider from "./HorizontalDivider";
import React from "react";

export default {
  title: "Component/divider/HorizontalDivider",
  component: HorizontalDivider,
} as ComponentMeta<typeof HorizontalDivider>;

const Template: ComponentStory<typeof HorizontalDivider> = (args) => (
  <div className="max-w-[50px]">
    <HorizontalDivider {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
