"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface IFileUploadProps {
  handleFileUpload: (file: File) => void;
}

const FileUpload: React.FC<IFileUploadProps> = ({ handleFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0]);

    // console.log({ acceptedFiles });

    handleFileUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={isDragActive ? "drag-active" : ""}>
      <input {...getInputProps()} accept=".xls,.xlsx" />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag drop an Excel file here, or click to select file</p>
      )}
      {uploadedFile && <p>Uploaded file: {uploadedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
