import React from 'react';

import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import SettingsPanelContentItem from '~/components/SettingsPanelContentItem';
import SettingsTabPanel from '~/components/SettingsTabPanel';

import ImageDownload from '../ImageDownload';

interface Props {
  className?: string;
  id: string;
  value: string;
}

const SettingsPanelBackground: React.FC<Props> = ({ className, id, value }) => {
  return (
    <SettingsTabPanel {...{ title: 'Фон', className, id, value }}>
      <SettingsPanelContentItem
        {...{
          title: 'Фоновое изображение',
          controls: (
            <Switch
              inputProps={{ 'aria-label': 'Включить фоновое изображение' }}
            />
          ),
        }}
      />
      <Divider />
      <ImageDownload />

      <Divider />
    </SettingsTabPanel>
  );
};

export default SettingsPanelBackground;
