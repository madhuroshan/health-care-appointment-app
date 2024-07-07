"use client";

import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
}

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="file-upload" {...getRootProps()}>
      <input {...getInputProps()} />

      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="file"
          width={100}
          height={100}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            alt="file"
            width={40}
            height={40}
            className="max-h-[400px] overflow-hidden object-cover"
          />
          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">Click to upload</span> or Drag n
              Drop
            </p>
            <p>SVG, PNG, JPEG, etc. (max 800x400)</p>
          </div>
        </>
      )}
    </div>
  );
};
