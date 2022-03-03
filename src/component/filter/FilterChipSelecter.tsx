import ChipGroup from "../chip/ChipGroup";
import RoundChip from "../chip/RoundChip";
import { filterState } from "../../store/FilterStore";
import produce from "immer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

interface FilterChipSelecter {
  filterList: string[];
  clickFilterItem: (item: string) => void;
}

const FilterChipSelecter = () => {
  const defaultFilterList = ["세일상품", "단독상품", "품절포함"];
  const [filterList, setfilterList] = useRecoilState(filterState);
  useEffect(() => {
    setfilterList(
      defaultFilterList.map((item) => {
        return { name: item, isApply: false };
      })
    );
  }, []);

  const clickFilterChip = (filter: string) => {
    const nextState = produce(filterList, (draft) => {
      const targetFilter = draft.find((item) => item.name === filter);
      if (targetFilter) targetFilter.isApply = !targetFilter.isApply;
    });
    setfilterList(nextState);
  };

  return (
    <div className="flex min-h-[55px] items-center justify-center">
      <ChipGroup>
        {filterList.map((item) => {
          return (
            <div
              key={item.name}
              className="cursor-pointer"
              onClick={() => clickFilterChip(item.name)}
            >
              <RoundChip text={item.name} isChecked={item.isApply} />
            </div>
          );
        })}
      </ChipGroup>
    </div>
  );
};

export default FilterChipSelecter;
