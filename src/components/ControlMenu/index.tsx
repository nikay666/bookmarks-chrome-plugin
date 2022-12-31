import React from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

import classNames from 'classnames';

import LinkBehavior from '../LinkBehavior';

import style from './index.module.css';

type ControlMenuPosition = 'top' | 'button';

interface Props {
  className?: string;
  position?: ControlMenuPosition;
}

const ControlMenu: React.FC<Props> = ({ className, position = 'button' }) => {
  return (
    <div className={classNames(className, style.root)}>
      <IconButton
        LinkComponent={LinkBehavior}
        href="/settings"
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
};

export default ControlMenu;
