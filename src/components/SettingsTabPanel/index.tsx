import React from 'react';

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { theme } from '~/theme';

const { spacing } = theme;

const StyledCard = styled(Card)({
  padding: `${spacing(6)} ${spacing(6)} `,
});

const StyledStack = styled(Stack)({
  gap: spacing(4),
});

const StyledContent = styled(Stack)({
  margin: `${spacing(3)} 0 ${spacing(6)}`,
});

interface Props {
  className?: string;
  id: string;
  value: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

const SettingsTabPanel: React.FC<Props> = ({
  className,
  id,
  value,
  title,
  children,
}) => {
  return value === id ? (
    <StyledCard variant="outlined" className={className}>
      <Typography variant="h6" component="h1">
        {title}
      </Typography>

      <StyledContent>
        <Divider />
        {children}
        <Divider />
      </StyledContent>

      <StyledStack direction="row">
        <Button variant="outlined">Сохранить</Button>
        <Button variant="outlined">Сброс</Button>
      </StyledStack>
    </StyledCard>
  ) : null;
};

export default SettingsTabPanel;
