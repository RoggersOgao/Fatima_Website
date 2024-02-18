
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadthing";
import { FileIcon } from "@radix-ui/react-icons";
import { FaTimes } from 'react-icons/fa'


type Props = {
  apiEndPoint: "avatar" | "placeholderImage";
  onChange: (url?: string) => void;
  value?: string;
};

function FileUpload({ apiEndPoint, onChange, value }: Props) {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="uploaded image"
              className=" h-full w-full object-contain mb-4"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button variant="ghost" type="button" onClick={() => onChange("")} className="mt-3 flex gap-1 items-center justify-center">
          <FaTimes className="h-4 w-4" />
          Remove Image
        </Button>
      </div>
    );
  }
  return <div className="w-full bg-muted/30">
    <UploadDropzone
    endpoint={apiEndPoint}
    onClientUploadComplete={(res) => {
      onChange(res?.[0].url)
    }}
    onUploadError={(error: Error) => {
      console.log(error)
    }}
    />
  </div>;
}

export default FileUpload;
