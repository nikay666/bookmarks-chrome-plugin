import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

const { palette, transitions } = theme;

export const StyledStack = styled(Stack)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '35%',
  zIndex: 10,
  transition: `${transitions.duration.short}ms ${transitions.easing.easeInOut}`,
  opacity: 0,
  cursor: 'pointer',
  ':hover': {
    opacity: 1,
  },
});

export const StyledIconButton = styled(IconButton)({
  color: palette.grey[700],
  ':hover': {
    color: palette.grey[100],
  },
});
