import React from 'react';

import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

import classNames from 'classnames';

import BookmarkGrid from '~/components/BookmarkGrid';
import ControlMenu from '~/components/ControlMenu';
import SearchInput from '~/components/SearchInput';

import { testBookmarks } from '~/testBookmarks';

import style from './index.module.css';

interface Props {
  className?: string;
}

const AppPage: React.FC<Props> = ({ className }) => {
  return (
    <Paper elevation={0} square className={classNames(style.root, 'body')}>
      <Container maxWidth="lg">
        <div className={style.container}>
          <SearchInput className={style.search} />
          <BookmarkGrid
            className={style.bookmarkGrid}
            bookmarks={testBookmarks}
          />
        </div>
      </Container>
      <ControlMenu />
    </Paper>
  );
};

export default AppPage;
