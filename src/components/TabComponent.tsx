"use client";
import React, { useState } from "react";
import Files from "./Files";
import Info from "./Info";
import Users from "./Users";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-between px-2">
        <div className="flex items-center justify-center w-[36%]">
          <button
            className={`${
              activeTab === 1
                ? "text-blue-500  border-b-2 border-blue-500 w-full"
                : ""
            } px-4 py-2 mr-2 rounded`}
            onClick={() => handleTabClick(1)}
          >
            Files
          </button>
        </div>

        <div className="flex items-center justify-center w-[36%]">
          <button
            className={`${
              activeTab === 2
                ? "text-blue-500  border-b-2 border-blue-500 w-full"
                : ""
            } px-4 py-2 mr-2 rounded`}
            onClick={() => handleTabClick(2)}
          >
            Info
          </button>
        </div>
        <div className="flex items-center justify-center w-[36%]">
          <button
            className={`${
              activeTab === 3
                ? "text-blue-500  border-b-2 border-blue-500 w-full"
                : ""
            } px-4 py-2 mr-2 rounded`}
            onClick={() => handleTabClick(3)}
          >
            Users
          </button>
        </div>
      </div>

      <div className="ml-4 mt-2">
        {activeTab === 1 && <Files />}
        {activeTab === 2 && <Info />}
        {activeTab === 3 && <Users />}
      </div>
    </div>
  );
};

export default TabComponent;
