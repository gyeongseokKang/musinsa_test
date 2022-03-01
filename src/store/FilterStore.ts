import { atom } from 'recoil'

export interface FilterItem {
  name: string
  isApply: boolean
}

export const filterState = atom<FilterItem[]>({
  key: 'filterState',
  default: [],
})
