import React from "react";

export default function Progressbar() {
  return (
    <div className="w-[98%] size-2 rounded-lg bg-gray-300 flex items-center justify-start">
      <div className="w-[30%] bg-blue-600 h-full "></div>
      <div className="w-[20%] bg-green-500 h-full "></div>
      <div className="w-[15%] bg-pink-500 h-full "></div>
      <div className="w-[10%] bg-blue-400 h-full rounded-lg"></div>
    </div>
  );
}
