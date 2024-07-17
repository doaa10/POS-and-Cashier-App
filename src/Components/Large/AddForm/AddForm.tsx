'use client'
import React, { useState } from 'react';
import styles from './AddForm.module.css';
import Button from '@/Components/Small/Button/Button';
import Input from '@/Components/Small/Inputs/Input';
import ImageUpload from '../ImageUpload/ImageUpload';
import FormInputs from '@/Components/Small/FormInputs/FormInputs';

interface FileWithPreview extends File {
  preview: string;
}
interface Props{
  name:string;
}
const AddForm: React.FC<Props> = ({name}) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    const previewFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setFiles(previewFiles);
  };

  return (
    <div className={styles.addForm}>
     <div className={styles.addForm_header}><span>{name} Product</span></div>
      <div className={styles.addForm_container}>
        <div className={styles.addForm_container_imageUpload}>
          <ImageUpload onDrop={handleDrop} />
          <div className={styles.preview}>
            {files.map(file => (
              <div key={file.name} className={styles.image}>
                <img src={file.preview} alt={file.name} />
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.addForm_container_inputs}>
            <FormInputs/>
        </div>
        <div className={styles.addForm_container_button}>
          <Button type='popular2' size='large' children={name} />
        </div>
      </div>
     
    </div>
  );
};

export default AddForm;
