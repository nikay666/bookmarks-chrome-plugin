import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import classNames from "classnames";
import React from "react";
import BookmarkGrid from "../../components/BookmarkGrid";
import SearchInput from "../../components/SearchInput";
import { testBookmarks } from "../../testBookmarks";
import style from "./index.module.css";


const AppPage: React.FC = () => {
  return (
    <Paper elevation={0} square className={classNames(style.root, "body")}>
      <Container maxWidth="lg">
        <div className={style.container}>
          <SearchInput className={style.search} />
          <BookmarkGrid className={style.bookmarkGrid} bookmarks={testBookmarks} />
        </div>
      </Container>
    </Paper>
  );
};

export default AppPage;
