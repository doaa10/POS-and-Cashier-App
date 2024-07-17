import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ImageUpload.module.css'
const ImageUpload = ({ onDrop }) => {
  const onDropAccepted = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropAccepted,
    accept: 'image/*'
  });

  return (
    <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.active : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
     
    </div>
  );
};

export default ImageDropzone;
