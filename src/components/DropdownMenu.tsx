"use client";
import { useState } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Info, Wrench, HelpCircle, ChevronRight } from "lucide-react";
import Progressbar from "./Progressbar";

interface propsTypes {
  name: string;
  email: string;
}

export default function DropdownMenu1({ name, email }: propsTypes) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage
              alt="User avatar"
              src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
            />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Avatar className="size-14">
              <AvatarImage
                alt="User avatar"
                src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
              />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <div className="ml-2 flex flex-col justify-center">
              <h1 className="font-semibold text-lg">{name}</h1>
              <p>{email}</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="mt-2">
            <div className="w-full flex items-center justify-between">
              <p className="font-semibold">9.99 Tb of 10 Tb used</p>
              <Info color="gray" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Progressbar />
          </DropdownMenuItem>
          <DropdownMenuItem className="mt-3">
            <div className="flex items-center justify-center gap-2">
              <Wrench size={25} color="gray" />
              <p className="text-[15px]">Settings</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <div className="w-full flex items-center justify-between group">
              <div className="flex items-center justify-center gap-2">
                <HelpCircle size={25} color="gray" />
                <p className="text-[15px]">Help</p>
              </div>
              <ChevronRight color="gray" />
            </div>
            {/* {showSubMenu && (
              <div className="absolute right-10 top-0 bg-white shadow-md rounded p-2 text-black">
                <p>Submenu item 1</p>
                <p>Submenu item 2</p>
              </div>
            )} */}
          </DropdownMenuItem>
          <DropdownMenuItem className="uppercase flex justify-end mt-3 text-blue-500 font-semibold">
            log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
