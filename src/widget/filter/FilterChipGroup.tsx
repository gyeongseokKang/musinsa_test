import ChipGroup from "../../component/chip/ChipGroup";
import { Icon } from "../../component/icon/Icon";
import RectangleChip from "../../component/chip/rectangleChip/RectangleChip";
import { filterState } from "../../store/FilterStore";
import produce from "immer";
import { useRecoilState } from "recoil";

const FilterChipGroup = () => {
  const [filterList, setFilterList] = useRecoilState(filterState);

  const clickFilterChip = (filter: string) => {
    const nextState = produce(filterList, (draft) => {
      const targetFilter = draft.find((item) => item.name === filter);
      if (targetFilter) targetFilter.isApply = !targetFilter.isApply;
    });
    setFilterList(nextState);
  };

  const refreshFilterChip = () => {
    const nextState = produce(filterList, (draft) => {
      draft.forEach((item) => (item.isApply = false));
    });
    setFilterList(nextState);
  };

  return (
    <div
      className={`flex w-full items-center justify-between px-4 ${
        filterList.some((item) => item.isApply) && "min-h-[50px]"
      }`}
    >
      <ChipGroup className="flex-nowrap">
        {filterList.map((item) => {
          if (!item.isApply) return null;
          return (
            <RectangleChip
              key={item.name}
              text={item.name}
              leftItem={
                <Icon
                  url="/icon/delete.png"
                  width={12}
                  height={12}
                  className="cursor-pointer"
                  onClick={() => {
                    clickFilterChip(item.name);
                  }}
                />
              }
            />
          );
        })}
      </ChipGroup>
      {filterList.some((item) => item.isApply === true) && (
        <Icon
          url="/icon/refresh.png"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => {
            refreshFilterChip();
          }}
        />
      )}
    </div>
  );
};

export default FilterChipGroup;
