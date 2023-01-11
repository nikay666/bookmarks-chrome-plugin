import React, { useState } from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import classNames from 'classnames';

import style from './index.module.css';

const ICON_SIZE = 42;

interface Props {
  className?: string;
}

const Dropzone: React.FC<Props> = ({ className }) => {
  const [isDoneDownloaded, setIsDoneDownloaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <label htmlFor="file" className={classNames(style.root, className)}>
      <input
        {...{
          className: style.input,
          type: 'file',
          id: 'file',
          accept: 'image/*',
        }}
      />

      {!isDoneDownloaded && !hasError && (
        <>
          <AddPhotoAlternateIcon
            style={{ fontSize: ICON_SIZE }}
            className={style.icon}
          />
          <span>Выберите файл</span>
          <span>or drag and drop</span>
        </>
      )}
      {isDoneDownloaded && !hasError && (
        <DownloadDoneIcon
          style={{ fontSize: ICON_SIZE }}
          className={style.icon}
        />
      )}
      {hasError && (
        <ErrorOutlineIcon
          style={{ fontSize: ICON_SIZE }}
          className={style.icon}
        />
      )}
    </label>
  );
};

export default Dropzone;
