import { useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CustomStar } from "./CustomStar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Download,
  Copy,
  FolderInput,
  Mail,
  Eye,
  MailCheck,
  Edit,
  Trash,
  MoreVertical,
  Info,
  Folder,
  Unlock,
  Move,
  Workflow,
  DownloadIcon,
  Share,
  Link,
} from "lucide-react";
import { Separator } from "./ui/separator";

type Row = {
  id: number;
  title: string;
  size: string;
  author: string;
  date: string;
  version: string;
  workflow: string;
  authorImgSrc: string;
};

type DataTableProps = {
  data: Row[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [starredRows, setStarredRows] = useState<Set<number>>(new Set());

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const deselectAll = () => {
    setSelectedRows([]);
    setSelectAll(false);
  };

  const toggleStar = (id: number) => {
    const newStarredRows = new Set(starredRows);
    if (newStarredRows.has(id)) {
      newStarredRows.delete(id);
    } else {
      newStarredRows.add(id);
    }
    setStarredRows(newStarredRows);
  };

  return (
    <div className="flex flex-col">
      {selectedRows.length > 0 && (
        <div className="flex justify-between items-center w-[99%] mb-4 bg-blue-500 rounded-lg p-1">
          <div className="flex items-center ml-3">
            <Tooltip
              content="cancel"
              className="bg-black text-white rounded-lg text-sm"
            >
              <button
                className="px-2 py-1 text-white  rounded "
                onClick={deselectAll}
              >
                &#10005;
              </button>
            </Tooltip>
          </div>
          {/* icons */}
          <div className="flex items-center justify-center gap-3 mr-2">
            <Tooltip
              content="download"
              className="bg-black text-white rounded-lg text-sm"
            >
              <Download color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="copy"
              className="bg-black text-white rounded-lg text-sm"
            >
              <Copy color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="folder"
              className="bg-black text-white rounded-lg text-sm"
            >
              <FolderInput color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="eye"
              className="bg-black text-white rounded-lg text-sm"
            >
              <Eye color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="email"
              className="bg-black text-white rounded-lg text-sm"
            >
              <MailCheck color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="delete"
              className="bg-black text-white rounded-lg text-sm"
            >
              <Trash color="white" size={17} className="cursor-pointer" />
            </Tooltip>
            <Tooltip
              content="more"
              className="bg-black text-white rounded-lg text-sm"
            >
              <MoreVertical
                color="white"
                size={17}
                className="cursor-pointer"
              />
            </Tooltip>
          </div>
        </div>
      )}
      <div className="grid grid-cols-12 gap-4 mt-2">
        <div className="flex items-center justify-start col-span-2">
          <input
            type="checkbox"
            className="size-4 cursor-pointer mr-2"
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          Title
        </div>
        <div className="flex justify-center">
          <span>Size</span>
        </div>
        <div className="col-span-2">
          <span>Author</span>
        </div>
        <div className="flex items-center justify-start col-span-2">Date</div>
        <div>
          <span>Version</span>
        </div>
        <div className="flex items-center justify-center">
          <span>Workflow</span>
        </div>
        <div className="col-span-2"></div> {/* Empty column for icons */}
        {data.map((row) => (
          <>
            <div
              key={row.id}
              className="flex items-center justify-start col-span-2"
            >
              <input
                type="checkbox"
                className="size-4 cursor-pointer mr-2"
                checked={selectedRows.includes(row.id)}
                onChange={() => toggleSelectRow(row.id)}
              />
              <Folder color="gray" className="mx-1" />
              <span className="text-sm">{row.title}</span>
            </div>
            <div className="flex items-center justify-center">
              <span>{row.size}</span>
            </div>
            <div className="col-span-2 flex items-center justify-start gap-2">
              <Avatar className="cursor-pointer size-8">
                <AvatarImage alt="User avatar" src={row.authorImgSrc} />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span>{row.author}</span>
            </div>
            <div className="flex items-center justify-start col-span-2 text-sm">
              {row.date}
            </div>
            <div className="flex items-center justify-center">
              <span>{row.version}</span>
            </div>
            <div className="flex items-center justify-center">
              <span>{row.workflow}</span>
            </div>
            <div className="col-span-2 flex items-center justify-end gap-4 px-4">
              <Tooltip content="favorite" className="bg-black text-white">
                <div className="size-5">
                  <CustomStar
                    filled={starredRows.has(row.id)}
                    onClick={() => toggleStar(row.id)}
                  />
                </div>
              </Tooltip>

              <Dropdown>
                <DropdownTrigger>
                  <MoreVertical
                    color="gray"
                    size={17}
                    className="cursor-pointer"
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  className="bg-gray-100 text-black rounded-lg"
                >
                  <DropdownItem key="info">
                    <div className="flex items-center justify-start gap-2">
                      <Info color="gray" size={18} />
                      Info
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Link color="gray" size={18} />
                      Symilink
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Share color="gray" size={18} />
                      Share
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <DownloadIcon color="gray" size={18} />
                      Download
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Workflow color="gray" size={18} />
                      Assign workflow
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Copy color="gray" size={18} />
                      Copy to
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Move color="gray" size={18} />
                      Move to
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Unlock color="gray" size={18} />
                      Unlock
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Eye color="gray" size={18} />
                      Watch
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Mail color="gray" size={18} />
                      Email to a friend
                    </div>
                  </DropdownItem>

                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Edit color="gray" size={18} />
                      Edit content
                    </div>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <div className="flex items-center justify-start gap-2">
                      <Trash color="gray" size={18} />
                      Delete
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
