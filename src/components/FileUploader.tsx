import { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { CloudDownload, FileImageIcon } from "lucide-react";

interface FileUploaderProps {
  onFileUpload: (fileUrl: string) => void;
}
const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setUploadedImageUrl(file.type);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string
        );
        formData.append(
          "api_key",
          import.meta.env.VITE_CLOUDINARY_API_KEY as string
        );

        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUDINARY_NAME as string
            }/image/upload`,
            formData
          );
          const fileUrl = response.data.secure_url;

          onFileUpload(fileUrl);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    },
    [onFileUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {uploadedImageUrl ? (
        <div className="relative py-18 flex justify-center items-center flex-col rounded-3xl cursor-pointer text-white bg-[rgba(36,160,181,0.5)] sm:w-56 sm:h-56 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <FileImageIcon />
          <p>{uploadedImageUrl}</p>
        </div>
      ) : isDragActive ? (
        <div className="relative py-18 flex justify-center items-center flex-col rounded-3xl cursor-pointer text-white bg-[rgba(36,160,181,0.5)] sm:w-56 sm:h-56 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <FileImageIcon />
          <p>{uploadedImageUrl}</p>
        </div>
      ) : (
        <div className="relative py-18 flex justify-center items-center flex-col rounded-3xl cursor-pointer w-full  text-white bg-[rgba(36,160,181,0.5)] sm:w-56 sm:h-56 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 ">
          <CloudDownload size={32} />
          <p>
            Drag & drop or click to <br /> upload
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
