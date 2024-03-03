export default function DashnavDrop() {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md shadow-sm">
        <FolderIcon className="size-12 text-gray-500 bg-gray-200 p-2 rounded-full" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-lg">Design system 2.5</span>
            <ChevronDownIcon className="h-4 w-4 text-gray-700" />
          </div>
          <div>
            <span className="text-[11px] text-gray-500">
              3 folders, 3 files | last update 16 min ago
            </span>
          </div>
        </div>
      </button>
      <div className="absolute left-0 z-10 hidden min-w-[300px] space-y-1 rounded-md bg-white p-4 shadow-lg group-hover:block">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 ">3 folders</span>
          <span className="text-sm text-gray-500">3 files</span>
        </div>
        <span className="text-sm text-gray-500">Last update 16 min ago</span>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}
