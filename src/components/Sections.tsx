import { AlignCenter, Rows3, GripHorizontal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sections = [
  "All files(292)",
  "Favorites(12)",
  "Locked(34)",
  "Active(83)",
  "Private(27)",
  "PDF",
  "Author",
  "Tags",
  "All workflows",
];

export default function Sections() {
  return (
    <main className="w-[99%] flex items-center justify-between mt-2">
      <div className="flex items-center justify-center gap-3">
        {sections.map((s, i) => (
          <p
            className="hover:bg-blue-500 cursor-pointer hover:text-white px-2 rounded-lg text-sm"
            key={i}
          >
            {s}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 pr-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlignCenter color="gray" size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>Align</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Rows3 color="gray" size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>List view</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <GripHorizontal color="gray" size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-black text-gray-300">
              <p>Grid</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}
