import { useState } from "react";

const ActivitySearch = () => {
  const [dropDownValue, setDropDownValue] = useState("default");
  return (
    <div className="bg-green-100 w-[80%] rounded-lg flex flex-col md:flex-row p-2 space-y-2 md:space-y-0 space-x-0 md:space-x-2">
      <div className="w-full md:w-[50%]">
        <input
          type="text"
          placeholder="Search Activities"
          className="rounded-md w-full p-1"
        />
      </div>
      <div className="w-full md:w-[25%]">
        <select
          value={dropDownValue}
          onChange={(e) => setDropDownValue(e.target.value)}
          className="rounded-md w-full h-full p-1"
        >
          <option value="default">Choose the activities</option>
          <option value="two">two</option>
        </select>
      </div>
      <div className="w-full md:w-[25%]">
        <button className="bg-primary hover:bg-green-800 text-white w-full p-1 rounded-md font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default ActivitySearch;
