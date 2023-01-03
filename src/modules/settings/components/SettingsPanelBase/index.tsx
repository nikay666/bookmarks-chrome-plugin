import React from 'react';

import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import SettingsPanelContentItem from '~/components/SettingsPanelContentItem';
import SettingsTabPanel from '~/components/SettingsTabPanel';

const StyledFormControl = styled(FormControl)({
  minWidth: '200px',
});

interface Props {
  className?: string;
  id: string;
  value: string;
}

const SettingsPanelBase: React.FC<Props> = ({ className, id, value }) => {
  return (
    <SettingsTabPanel
      {...{
        title: 'Общее',
        className,
        id,
        value,
      }}
    >
      <SettingsPanelContentItem
        {...{
          title: 'Отображать поисковую строку',
          controls: (
            <Switch
              inputProps={{ 'aria-label': 'Отображать поисковую строку' }}
            />
          ),
        }}
      />
      <Divider />
      <SettingsPanelContentItem
        {...{
          title: 'Поисковая система',
          controls: (
            <StyledFormControl>
              <Select id="search-machine">
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </StyledFormControl>
          ),
        }}
      />
      <Divider />
      <SettingsPanelContentItem
        {...{
          title: 'Количество закладок в ряду',
          controls: (
            <StyledFormControl>
              <Select id="bookmarks-count" defaultValue={4}>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </StyledFormControl>
          ),
        }}
      />
    </SettingsTabPanel>
  );
};

export default SettingsPanelBase;
