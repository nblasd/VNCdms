import { Menu, Download, FolderPlus, Plus, Folder } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DashnavDrop from "./DashnavDrop";

export default function Dashnav() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <DashnavDrop />
      </div>
      {/*  */}
      <div className="flex items-center space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Download className="text-gray-600 w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>Download</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FolderPlus className="text-gray-600 w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>new Folder</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Plus className="text-gray-600 w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>Add</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
}
