import React, { useRef } from "react";

import { FilterQuery } from "../../store/FilterStore";
import { Icon } from "../../component/icon/Icon";

interface FilterSearcherProp {
  filterQuery: FilterQuery;
  autoCompleteList: autoCompleteItem[];
  updateQuery: (query: FilterQuery) => void;
}

interface autoCompleteItem {
  name: string;
  brand: string;
  code: number;
}

const FilterSearcher = ({
  filterQuery,
  autoCompleteList,
  updateQuery,
}: FilterSearcherProp) => {
  const dataListRef = useRef<HTMLDataListElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let itemIdList: number[] | undefined = undefined;
    if (dataListRef && e.target.value.length > 0) {
      itemIdList = getCurrentDataListOptions(dataListRef, e.target.value);
    }
    updateQuery({
      query: e.target.value,
      itemIdList: itemIdList,
    });
  };

  const getCurrentDataListOptions = (
    dataList: React.RefObject<any>,
    query: string
  ): number[] => {
    if (!dataList.current) return [];
    const currentDataList = dataList.current.children;
    let currentItemList: number[] = [];

    for (let i = 0; i < currentDataList.length; i++) {
      if (
        currentDataList[i].value.includes(query) ||
        currentDataList[i].label.includes(query)
      ) {
        const goodId = currentDataList[i].label.split("|")[1].trim();
        currentItemList.push(Number(goodId));
      }
    }

    return currentItemList;
  };
  return (
    <>
      <div className="w-full p-4 bg-gray1">
        <div className="flex items-center p-2 bg-white border cursor-pointer">
          <Icon
            url="/icon/search.png"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <input
            className="w-full outline-none"
            type="text"
            list="goods-options"
            placeholder="상품명 검색"
            autoComplete="on"
            value={filterQuery.query}
            onChange={handleChange}
          />
          <datalist id="goods-options" ref={dataListRef}>
            {autoCompleteList.map((item) => (
              <option
                value={item.name}
                label={`${item.brand} | ${item.code} `}
              />
            ))}
          </datalist>
        </div>
      </div>
    </>
  );
};

export default FilterSearcher;
