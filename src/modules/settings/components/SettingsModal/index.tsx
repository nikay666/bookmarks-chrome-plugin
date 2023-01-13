import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Card,
  Container,
  Drawer,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import SettingsPanelTabMenu from '~/components/SettingsPanelTabMenu';

import { theme } from '~/theme';

import SettingsPanelBackground from '../SettingsPanelBackground';
import SettingsPanelBase from '../SettingsPanelBase';
import style from './index.module.css';

const { palette, spacing } = theme;

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

const StyledBox = styled(Card)({
  position: 'absolute' as 'absolute',
  minWidth: 800,

  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'grid',
  gap: spacing(4),
  padding: `${spacing(8)} ${spacing(8)} ${spacing(12)}`,
  background: palette.background.paper,
});

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<Props> = ({ className, isOpen, onClose }) => {
  const [value, setValue] = useState('base');
  const [open, setOpen] = useState(isOpen);

  const closeHandler = () => {
    setOpen(false);
    onClose();
  };

  const changeHandler = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event, newValue);
    setValue(newValue);
  };
  return (
    <Modal open={open} onClose={closeHandler}>
      <StyledBox>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Typography variant="h5" component="h1">
            Настройки
          </Typography>
          <IconButton onClick={closeHandler}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={4} justifyContent="flex-start">
          <SettingsPanelTabMenu
            {...{
              value: 0,
              items: settingMenuItems,
              className: style.menu,
              onChange: changeHandler,
            }}
          />

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
        </Stack>
      </StyledBox>
    </Modal>
  );
};

export default SettingsModal;
