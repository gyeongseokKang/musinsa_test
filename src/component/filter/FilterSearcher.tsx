import React from "react";
import { Icon } from "../icon/Icon";

interface FilterSearcherProp {
  query: string;
  autoCompleteList: autoCompleteItem[];
  updateQuery: (query: string) => void;
}

interface autoCompleteItem {
  name: string;
  brand: string;
  code: number;
}

const FilterSearcher = ({ query, autoCompleteList, updateQuery }: FilterSearcherProp) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex items-center w-full p-2 border cursor-pointer">
        <Icon url="/icon/search.png" width={24} height={24} className="cursor-pointer" />
        <input
          className="w-full outline-none"
          type="text"
          list="goods-options"
          placeholder="상품명 검색"
          autoComplete="on"
          value={query}
          onChange={handleChange}
        />
      </div>
      <datalist id="goods-options">
        {autoCompleteList.map((item) => (
          <option value={item.name} label={`${item.brand} | ${item.code} `} />
        ))}
      </datalist>
    </>
  );
};

export default FilterSearcher;
