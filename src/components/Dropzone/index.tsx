import React, { useState } from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/material/styles';

import classNames from 'classnames';

import style from './index.module.css';
import { theme } from '~/theme';

const { palette, transitions } = theme;

const ICON_SIZE = 42;

const StyledLabel = styled('label')({
  transition: `${transitions.duration.shortest}ms ${transitions.easing.easeInOut}`,
  ':hover': {
    background: palette.grey[900],
  },
});

interface Props {
  className?: string;
}

const Dropzone: React.FC<Props> = ({ className }) => {
  const [isDoneDownloaded, setIsDoneDownloaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <StyledLabel htmlFor="file" className={classNames(style.root, className)}>
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
    </StyledLabel>
  );
};

export default Dropzone;
