import React from "react";
import BookmarkCard from "../BookmarkCard";
import { Bookmark } from "../BookmarkCard/types";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

import { theme } from "../../theme";

const { spacing } = theme;

export interface Props {
  className?: string;
  bookmarks: Bookmark[];
  columnCount?: number;
}

const StyledBookmarkGrid = styled(Stack)({
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: spacing(4),
});

const getCalculatedWidthBookmarkCard = (columnCount: number) =>
  `calc((100% / ${columnCount}) - ${spacing(4)})`;

const BookmarkGrid: React.FC<Props> = ({
  className,
  bookmarks,
  columnCount = 4,
}) => {
  const width = getCalculatedWidthBookmarkCard(columnCount);

  return (
    <StyledBookmarkGrid>
      {bookmarks.map((bookmark) => (
        <BookmarkCard key={bookmark.id} content={bookmark} width={width} />
      ))}
    </StyledBookmarkGrid>
  );
};

export default BookmarkGrid;
