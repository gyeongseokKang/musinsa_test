import { atom } from "recoil";

export interface FilterItem {
  name: string;
  isApply: boolean;
}

export interface FilterQuery {
  query: string;
  itemIdList: number[] | undefined;
}

export const filterState = atom<FilterItem[]>({
  key: "filterState",
  default: [],
});

export const filterQueryState = atom<FilterQuery>({
  key: "filterQueryState",
  default: {
    query: "",
    itemIdList: undefined,
  },
});
