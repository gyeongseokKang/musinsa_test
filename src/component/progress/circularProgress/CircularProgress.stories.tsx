import { ComponentMeta, ComponentStory } from "@storybook/react";

import CircularProgress from "./CircularProgress";
import React from "react";

export default {
  title: "Component/progress/CircularProgress",
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <div className="max-w-[50px]">
    <CircularProgress {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  size: 32,
  spin: true,
};
