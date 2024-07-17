import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ImageUpload.module.css';
import { BiSolidImageAdd } from "react-icons/bi";

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
      <div className={styles.content}>
        <BiSolidImageAdd size={30} color='#C8161D'/>
      {isDragActive ? (
        <p className={styles.text}>Drop the files here...</p>
      ) : (
        <p className={styles.instruction}>Drag & drop some files here, <br/><span>or click to select files</span></p>
      )}
      </div>
     
     
    </div>
  );
};

export default ImageUpload;
