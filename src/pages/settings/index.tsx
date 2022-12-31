import React from 'react';

import {
  Divider,
  FormControl,
  InputLabel,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import LinkBehavior from '~/components/LinkBehavior';

import { theme } from '~/theme';

const { palette } = theme;

const StyledSettingMenu = styled(Card)({
  width: '20%',
});

const StyledSettingContent = styled(Card)({
  width: '80%',
});

const settings = {
  base: {
    label: 'Основные',
    url: '#base',
  },
  background: { label: 'Фон', url: '#background' },
  theme: { label: 'Тема', url: '#theme' },
  importExport: { label: 'Импорт/экспорт', url: '#importExport' },
};

const settingMenuItems = [
  {
    id: 'base',
    label: 'Основные',
    url: '#base',
  },
  { id: 'background', label: 'Фон', url: '#background' },
  { id: 'theme', label: 'Тема', url: '#theme' },
  { id: 'importExport', label: 'Импорт/экспорт', url: '#importExport' },
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

interface SettingSection {
  label: string;
  order: number;
  items: SettingItem[];
}
interface SettingItem {
  label: string;
  order: number;
  description: string;
  value: string;
}

const BackgroundSettingsConfig = {
  label: 'Фон',
  image: {},
};

const SettingsPage = () => {
  return (
    <Paper
      elevation={0}
      square
      className="body"
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          component="h1"
        >
          Настройки
        </Typography>

        <Stack
          direction="row"
          spacing={4}
        >
          <StyledSettingContent variant="outlined">
            <Typography
              variant="h6"
              component="h1"
            >
              Общее
            </Typography>

            <Stack>
              <div>
                <span>Отображать поисковую строку</span>
                <Switch
                  inputProps={{ 'aria-label': 'Отображать поисковую строку' }}
                />
              </div>
              <Divider />
              <div>
                <span>Поисковая система</span>
                <FormControl>
                  <InputLabel id="search-machine-label">
                    Поисковая система
                  </InputLabel>
                  <Select
                    labelId="search-machine-label"
                    id="search-machine"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Divider />

              <div>
                <span>Количество закладок в ряду</span>
                <FormControl>
                  <InputLabel id="bookmarks-count-label">
                    Количество закладок в ряду
                  </InputLabel>
                  <Select
                    labelId="bookmarks-count-label"
                    id="bookmarks-count"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Divider />
            </Stack>
          </StyledSettingContent>

          <StyledSettingMenu variant="outlined">
            <List>
              {settingMenuItems.map(setting => (
                <ListItemButton
                  key={setting.id}
                  LinkComponent={LinkBehavior}
                  href={setting.url}
                >
                  <ListItemText primary={setting.label} />
                </ListItemButton>
              ))}
            </List>
          </StyledSettingMenu>
        </Stack>
      </Container>
    </Paper>
  );
};

export default SettingsPage;
