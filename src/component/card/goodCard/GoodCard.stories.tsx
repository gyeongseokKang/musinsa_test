import { ComponentMeta, ComponentStory } from "@storybook/react";

import GoodCard from "./GoodCard";
import React from "react";

export default {
  title: "Component/card/GoodCard",
  component: GoodCard,
} as ComponentMeta<typeof GoodCard>;

const Template: ComponentStory<typeof GoodCard> = (args) => (
  <GoodCard {...args} />
);

const testGood = {
  goodsNo: 1759350,
  goodsName: "[SET] 베이직 라인 셋업",
  price: 59000,
  brandName: "에프씨엠엠",
  imageUrl:
    "https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg",
  linkUrl: "https://store.musinsa.com/app/goods/1759350",
  brandLinkUrl: "https://www.musinsa.com/brands/fcmm",
  normalPrice: 74000,
  isSale: false,
  saleRate: 20,
  isSoldOut: false,
  isExclusive: false,
};
export const Primary = Template.bind({});

Primary.args = {
  good: testGood,
};

export const exclusive = Template.bind({});

exclusive.args = {
  good: { ...testGood, isExclusive: true },
};

export const sale = Template.bind({});

sale.args = {
  good: { ...testGood, isSale: true },
};
