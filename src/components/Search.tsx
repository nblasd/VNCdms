import React from "react";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="w-[99%] mt-2 relative">
      <input
        type="search"
        className="w-full pl-10 pr-4 border border-gray-300 py-2 px-2 rounded-lg"
        placeholder="Search"
      />
      <SearchIcon className="h-5 w-5 absolute top-2 left-3 text-gray-400" />
    </div>
  );
}
