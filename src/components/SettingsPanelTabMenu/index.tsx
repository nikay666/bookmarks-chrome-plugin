import React from 'react';

import { Tab, Tabs } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

import { theme } from '~/theme';
import { SettingMenuItem } from '~/types/settings';

const { palette, transitions } = theme;

const StyledTab = styled(Tab)({
  alignItems: 'flex-start',
  textAlign: 'start',
  transition: `${transitions.duration.shortest}ms ${transitions.easing.easeInOut}`,

  ':hover': {
    background: palette.grey[900],
  },
});

interface Props {
  className?: string;
  items: SettingMenuItem[];
  value: number;
  onChange?: (event: React.SyntheticEvent, newValue: string) => void;
}

const SettingsPanelTabMenu: React.FC<Props> = ({
  className,
  items,
  onChange,
}) => {
  return (
    <Card variant="outlined" className={className}>
      <Tabs orientation="vertical" onChange={onChange}>
        {items.map(setting => (
          <StyledTab
            {...{
              key: setting.id,
              label: setting.label,
              value: setting.id,
            }}
          />
        ))}
      </Tabs>
    </Card>
  );
};

export default SettingsPanelTabMenu;
