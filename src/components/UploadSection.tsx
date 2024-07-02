import {
  Input,
  Avatar,
  FileInput,
  Button,
  FileButton,
  Badge,
  Checkbox,
} from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { IoMoonSharp, IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useState } from "react";

export default function UploadSection() {
  const [, setFile] = useState<File | null>(null);

  return (
    <div className="w-[300px] flex flex-col gap-8 items-start justify-start h-full min-h-[700px] text-blue-900">
      <div className="shadow-lg rounded-3xl flex flex-row p-2 items-center justify-between w-full">
        <Input
          w={150}
          placeholder="Search"
          leftSection={<BiSearch size={16} />}
          radius={24}
          variant="filled"
        />
        <FaRegBell size={16} />
        <IoMoonSharp size={16} />
        <IoInformationCircleOutline size={20} />
        <Avatar size={36} color="red" />
      </div>
      <div className="rounded-3xl shadow-md border p-6 w-full flex flex-col gap-4">
        <h1 className="font-bold text-blue-900 mb-2">
          Upload Videos, Audios or Transcripts
        </h1>

        <Button
          leftSection={<FaGoogleDrive />}
          autoContrast
          size="lg"
          color="rgba(245, 247, 255, 1)"
            classNames={{ label: "text-md" }}
        >
          Upload files from drive
        </Button>
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <Button
              {...props}
              leftSection={<MdOutlineCloudUpload size={20} />}
              color="rgba(245, 247, 255, 1)"
              autoContrast
              size="lg"
              classNames={{label: "text-md"}}
            >
              Upload files
            </Button>
          )}
        </FileButton>

        <h1 className="mt-6 font-bold text-blue-900 mb-2">Data Integrations</h1>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-xl text-blue-900 mb-2">HubSpot</h1>
          </div>
          <Badge color="#f5f7ff" autoContrast radius="sm">
            HSM
          </Badge>
        </div>
        <div className="pl-4">
          <Checkbox
            size="xs"
            className="mb-4"
            label="Some data Integration I have to ask about"
          />
          <Checkbox size="xs" label="Data Integration" />
        </div>
      </div>
      <Button
        w="300px"
        radius={12}
        color="rgba(67, 25, 255, 1)"
        classNames={{ label: "text-md" }}
        size="lg"
      >
        Generate Report
      </Button>
    </div>
  );
}
