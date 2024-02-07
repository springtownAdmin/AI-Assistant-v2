"use client";

import { FileTypes } from '@/utils/constants';
import { DragEventType, OnChangeEventType, fileEventType, fileRefType }  from '@/utils/types';
import { fileStateTypes, fileType, handleOpenFileType, previewStateType } from '@/utils/types';
import axios, { AxiosProgressEvent } from 'axios';
import React from 'react'

const useUpload = () => {

    const fileRef = React.useRef<fileRefType>(null);
    const [ files, setFiles ] = React.useState<fileStateTypes>([]);
    const [ previews, setPreviews ] = React.useState<previewStateType>([]);
    const [ uploadProgress, setUploadProgress ] = React.useState(0);

    const handleOpenFile: handleOpenFileType = () => {
        
        if(!fileRef) return;

        fileRef.current?.click();

    }

    const readContentFromFile = (file: fileType) => {

        const selectedFile = file;

        if (selectedFile) {

          const reader = new FileReader();

          reader.onload = (event) => {
            
            const fileContent = event.target?.result;

            if (fileContent) {

              console.log(fileContent)

            }
            
          };

          reader.readAsText(selectedFile);

        }
        
    };

    const handlePreviews = (fileEvent: fileEventType) => {

      const filePreviews: previewStateType = [];
      const uploadedFiles = fileEvent?.files ? fileEvent.files : [];

      for (let i = 0; i < uploadedFiles.length; i++) {
        
        const file = uploadedFiles[i];
        const fileURL = URL.createObjectURL(file);
  
        filePreviews.push({ name: file.name, url: fileURL });

      }

      setPreviews(filePreviews);

    }

    const handleUploadToS3 = async (file: (fileType | any)) => {


      const RequestedBody = {
        name: file.name
      }

      try {
        
        // const response = await axios.post(process.env.FILE_UPLOAD_API, RequestedBody)
        // const response = await axios.post(process.env.FILE_UPLOAD_API, RequestedBody, 
        //   {
        //     onUploadProgress: (progressEvent: AxiosProgressEvent) => {

        //         let progressLoaded = progressEvent.loaded;
        //         let progressTotal = progressEvent.total || 100;

        //         let percentCompleted = Math.round((progressLoaded * 100) / progressTotal);
        //         setUploadProgress(percentCompleted);

        //     }
        //   });

        // Assuming the response contains the URL to the uploaded file
        // console.log('File uploaded to: ', response);
        
  
      } catch (error) {

        console.error('Error uploading file: ', error);

      }

    }

    const handleFileChange = (e: OnChangeEventType) => {

        e.preventDefault();

        const selectedFile = e.target.files && e.target.files[0];
        const allFiles: fileStateTypes = e.target?.files ? Array.from(e.target.files) : [];
        setFiles(allFiles);

        // handleUploadToS3(selectedFile)
        handlePreviews(e.target);

    };

    const handleDrop = (e: DragEventType) => {

        e.preventDefault();

        const selectedFile = Array.from(e.dataTransfer.files)[0];
        setFiles(Array.from(e.dataTransfer.files));

        readContentFromFile(selectedFile);

    }

    const handleRemove = (id: number) => {

      const newFiles = files.filter((file, ind) => ind !== id)
      setFiles(newFiles);

    }
    
    const handleFileTypes = (type: string) => {

      if (FileTypes.csv(type))
        return "csv"

      if (FileTypes.pdf(type)) 
        return "pdf"

      if (FileTypes.txt(type)) 
        return "txt"

      if (FileTypes.docx(type)) 
        return "docx"

      return "txt"

    }

    return { files, fileRef, handleOpenFile, handleFileChange, handleDrop, handleRemove, handleFileTypes, previews };

}

export default useUpload