import { useState } from "react";

const ActivitySearch = () => {
  const [dropDownValue, setDropDownValue] = useState("default");
  return (
    <div className="bg-green-100 w-[90%] rounded-lg grid grid-cols-1 gap-2 md:grid-cols-3 space-y-2 md:space-y-0 p-5">
      <div className="w-full">
        <input
          type="text"
          placeholder="Search Activities"
          className="rounded-md w-full p-1"
        />
      </div>
      <div className="w-full">
        <select
          value={dropDownValue}
          onChange={(e) => setDropDownValue(e.target.value)}
          className="rounded-md w-full h-full p-1"
        >
          <option value="default">Choose the activities</option>
          <option value="two">two</option>
        </select>
      </div>
      <div className="w-full">
        <button className="bg-primary hover:bg-green-800 text-white w-full p-1 rounded-md font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default ActivitySearch;
