import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import classNames from 'classnames';

import SettingsPanelTabMenu from '~/components/SettingsPanelTabMenu';

import { SettingsPanelBackground, SettingsPanelBase } from '~/modules/settings';
import { theme } from '~/theme';

import style from './index.module.css';

const { palette, spacing } = theme;

const StyledSettingMenu = styled(Card)({
  width: '20%',
});

const StyledContainer = styled(Container)({
  display: 'grid',
  gap: spacing(8),
});

const settings = {
  base: {
    label: 'Основные',
    url: '/base',
  },
  background: { label: 'Фон', url: '/background' },
  theme: { label: 'Тема', url: '/theme' },
  importExport: { label: 'Импорт/экспорт', url: '/importExport' },
};

const settingMenuItems = [
  {
    id: 'base',
    label: 'Основные',
    url: '/base',
  },
  { id: 'background', label: 'Фон', url: '/background' },
  { id: 'theme', label: 'Тема', url: '/theme' },
  { id: 'importExport', label: 'Импорт/экспорт', url: '/importExport' },
];

const BaseSettingsConfig = {
  label: 'Основные',
  sections: {
    serachMachine: {},
    columnCount: {},
    groups: {},
    positionControlMenu: {},
  },
};

const BackgroundSettingsConfig = {
  label: 'Фон',
  image: {},
};

interface Props {
  className?: string;
}

const SettingsPage: React.FC<Props> = ({ className }) => {
  const [value, setValue] = useState('base');

  const changeHandler = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event, newValue);
    setValue(newValue);
  };

  return (
    <Paper
      elevation={0}
      square
      className={classNames(className, style.root, 'body')}
    >
      <StyledContainer maxWidth="md">
        <Typography variant="h5" component="h1">
          Настройки
        </Typography>
        <Stack direction="row" spacing={4} justifyContent="flex-end">
          <SettingsPanelBase
            {...{
              className: style.panel,
              id: 'base',
              value,
            }}
          />
          <SettingsPanelBackground
            {...{
              className: style.panel,
              id: 'background',
              value,
            }}
          />
          <SettingsPanelTabMenu
            {...{
              value: 0,
              items: settingMenuItems,
              className: style.menu,
              onChange: changeHandler,
            }}
          />
        </Stack>
      </StyledContainer>
    </Paper>
  );
};

export default SettingsPage;
