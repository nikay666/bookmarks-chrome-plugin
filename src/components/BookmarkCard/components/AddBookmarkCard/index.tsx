import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import classNames from 'classnames';

import { theme } from '~/theme';

import { StyledBookmarkCard } from '../../styles';
import style from './index.module.css';

export interface Props {
  className?: string;
  width?: string;
}

const { palette, transitions } = theme;

const StyledIconButton = styled(IconButton)({
  color: palette.grey[800],
  transition: `${transitions.duration.short}ms ${transitions.easing.easeInOut}`,
  ':hover': {
    color: palette.grey[100],
  },
});

const StyledAddBookmarkCardn = styled(StyledBookmarkCard)({
  background: 'transparent',
  transition: `${transitions.duration.short}ms ${transitions.easing.easeInOut}`,

  ':hover': {
    background: theme.palette.action.hover,
  },
});

const AddBookmarkCard: React.FC<Props> = ({ className, width = '' }) => {
  return (
    <StyledAddBookmarkCardn
      {...{
        className: classNames(className, style.root),

        style: { width },
      }}
    >
      <StyledIconButton
        {...{
          sx: {
            fontSize: 40,
          },
          'aria-label': 'Add new',
        }}
        className={style.icon}
      >
        <AddIcon fontSize="inherit" />
      </StyledIconButton>
    </StyledAddBookmarkCardn>
  );
};

export default AddBookmarkCard;
