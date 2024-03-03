import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function Hero() {
  return (
    <main className="grid grid-cols-4">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Dashboard />
      </div>
    </main>
  );
}
