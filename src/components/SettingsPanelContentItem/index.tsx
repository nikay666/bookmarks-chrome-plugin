import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import classNames from 'classnames';

import { theme } from '~/theme';

import style from './index.module.css';

const { spacing } = theme;

const StyledStack = styled(Stack)({
  gap: spacing(8),
  justifyContent: 'space-between',
  padding: `${spacing(2)} 0`,
});

interface SettingsPanelContentItemProps {
  className?: string;
  title: string;
  subtitle?: string;
  controls: React.ReactNode;
}

const SettingsPanelContentItem: React.FC<SettingsPanelContentItemProps> = ({
  className,
  title,
  subtitle,
  controls,
}) => {
  return (
    <StyledStack
      {...{
        className: classNames(className, style.root),
        direction: 'row',
      }}
    >
      <span className={style.title}>
        <Typography variant="subtitle1" component="span">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="span">
          {subtitle}
        </Typography>
      </span>

      <span>{controls}</span>
    </StyledStack>
  );
};

export default SettingsPanelContentItem;
