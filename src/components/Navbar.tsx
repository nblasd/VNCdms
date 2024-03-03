import { Input } from "@/components/ui/input";

import { Grip, Search, Bell, TableProperties } from "lucide-react";
import DropdownMenu1 from "./DropdownMenu";

export default function Component() {
  return (
    <nav key="1" className="bg-[#007bff] px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Grip className="text-white" />
          <span className="text-xl font-bold text-white">VNCdms</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input className="pl-10 pr-4 py-2 rounded-full" type="search" />
            <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <Bell className="text-white" />
          <TableProperties className="text-white" />
          <DropdownMenu1
            name="Darren Morrison"
            email="darrenmorrison@gmail.com"
          />
        </div>
      </div>
    </nav>
  );
}
