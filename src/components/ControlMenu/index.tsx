import React, { useState } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

import classNames from 'classnames';

import { SettingsModal } from '~/modules/settings';

import style from './index.module.css';

type ControlMenuPosition = 'top' | 'button';

interface Props {
  className?: string;
  position?: ControlMenuPosition;
}

const ControlMenu: React.FC<Props> = ({ className, position = 'button' }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className={classNames(className, style.root)}>
        <IconButton onClick={() => setIsOpenModal(true)}>
          <SettingsIcon />
        </IconButton>
      </div>
      {isOpenModal && (
        <SettingsModal
          {...{
            isOpen: isOpenModal,
            onClose: () => setIsOpenModal(false),
          }}
        />
      )}
    </>
  );
};

export default ControlMenu;
