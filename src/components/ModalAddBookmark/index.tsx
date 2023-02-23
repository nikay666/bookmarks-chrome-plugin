import React, { useState } from 'react';

import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import style from './index.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)({
  '	.MuiDialog-paper': {
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))',
  },
});

const ModalAddBookmark: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isWithOptions, setIsWithOptions] = useState(false);

  const handleClick = () => setIsWithOptions(prev => !prev);
  const handleClose = () => {
    onClose();
  };
  const handleSave = () => {};

  return (
    <StyledDialog open={isOpen}>
      <DialogTitle>Добавьте закладку</DialogTitle>
      <DialogContent className={style.content}>
        <div className={style.base}>
          <TextField
            {...{
              required: true,
              id: 'url',
              label: 'Ссылка на страницу',
              variant: 'standard',
            }}
          />
          <TextField
            {...{
              id: 'name',
              label: 'Название',
              variant: 'standard',
            }}
          />
        </div>

        <Button onClick={handleClick} style={{ fontSize: '12px' }}>
          Настроить подробнее
        </Button>
        <Collapse in={isWithOptions} className={style.collapsed}>
          Test
        </Collapse>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Сохранить</Button>
        <Button onClick={handleClose}>Закрыть</Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ModalAddBookmark;
