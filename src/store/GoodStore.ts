import { atom } from "recoil";
import { Good } from "../service/data/getDataGood";

export const goodState = atom<Good[]>({
  key: "goodState",
  default: [],
});
