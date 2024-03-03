"use client";
import React from "react";
import { Folder, File, Plus } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  Workflow,
  CheckCheck,
  Star,
  Link,
  Share,
  Trash,
  Wrench,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [folders, setFolders] = React.useState([
    { name: "Folder 1", files: ["File 1", "File 2"], collapsed: false },
    { name: "Folder 2", files: ["File 3"], collapsed: false },
  ]);
  const [newFolderName, setNewFolderName] = React.useState("");
  const toggleFolder = (index: number) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder, i) =>
        i === index ? { ...folder, collapsed: !folder.collapsed } : folder
      )
    );
  };

  const addFolder = () => {
    if (newFolderName.trim() !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { name: newFolderName, files: [], collapsed: false },
      ]);
      setNewFolderName("");
    }
  };
  const deleteFolder = (index: number) => {
    setFolders((prevFolders) => prevFolders.filter((_, i) => i !== index));
  };
  const addFile = (index: number, newFileName: string) => {
    if (newFileName.trim() !== "") {
      setFolders((prevFolders) =>
        prevFolders.map((folder, i) =>
          i === index
            ? { ...folder, files: [...folder.files, newFileName] }
            : folder
        )
      );
    }
  };
  return (
    <ScrollArea className="h-screen w-full rounded-md border bg-white flex items-center justify-center">
      <div className="flex items-center justify-center my-2">
        <input
          type="search"
          className="bg-gray-100 p-1 rounded-lg"
          placeholder=" Search"
        />
        <Dialog>
          <DialogTrigger className="bg-[#007bff]  p-[2px] rounded-r-lg">
            <Plus color="white" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Make new folder</DialogTitle>

              <DialogDescription>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="New Folder Name"
                  className="border border-gray-400 rounded px-2 py-1 mr-2"
                />
                <Button
                  onClick={() => {
                    addFolder();
                  }}
                >
                  Add Folder
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col">
        {folders.map((folder, index) => (
          <div key={index}>
            <ContextMenu>
              <ContextMenuTrigger>
                {" "}
                <div
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                  onClick={() => toggleFolder(index)}
                >
                  <Folder className="w-6 h-6 mr-2" />
                  <span>{folder.name}</span>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  <div
                    onClick={() => {
                      deleteFolder(index);
                    }}
                    className="flex items-center justify-between w-full"
                  >
                    <span>Delete</span>
                    <Trash color="red" size={18} />
                  </div>
                </ContextMenuItem>
                <ContextMenuItem>
                  <div className="flex items-center justify-between w-full">
                    <span>Add File</span>
                    <Plus color="green" size={18} />
                  </div>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>

            {!folder.collapsed && (
              <ul>
                {folder.files.map((file, fileIndex) => (
                  <li key={fileIndex} className="pl-8">
                    <div className="flex items-center ">
                      <File className="w-4 h-4 mr-2" />
                      <span>{file}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Separator className="my-2" />
      <div className="space-y-2 mt-6 ">
        <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Workflow color="gray" />
          <span>Workflows</span>
        </div>
        <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <CheckCheck color="gray" />
              <span>Approvals</span>
            </div>
            <span className="px-2 rounded-2xl bg-red-500 text-white">11</span>
          </div>
        </div>{" "}
        <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Star color="gray" />
          <span>Favorites</span>
        </div>{" "}
        <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Link color="gray" />
          <span>Symilinks</span>
        </div>{" "}
        <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Share color="gray" />
          <span>Shared file</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
        <Wrench color="gray" />
        <span>configurations</span>
      </div>
      <div className="flex  items-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
        <Trash color="gray" />
        <span>Trash</span>
      </div>
    </ScrollArea>
  );
}
