import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import React from "react";

import style from "./index.module.css";
import { theme } from "../../theme";
import BookmarkCardButtons from "./components/BookmarkCardButtons";
import { Bookmark } from "./types";
import classNames from "classnames";

export interface BookmarkCardProps {
  className?: string;
  content: Bookmark;
  width?: string;
}

const StyledCard = styled(Card)({
  minWidth: 200,
  height: 140,
  position: "relative",
});

const BookmarkCard: React.FC<BookmarkCardProps> = ({
  className,
  content,
  width = "",
}) => {
  const { name, url, customization } = content;

  return (
    <StyledCard
      {...{
        className: classNames(style.root, className),

        raised: true,
        style: { width },
      }}
    >
      <a
        {...{
          className: style.link,

          "aria-label": name,
          href: url,
          style: {
            backgroundColor: customization.backgroundColor,
          },
        }}
      >
        {customization?.backgroundImage && (
          <>
            <img
              {...{
                className: style.backgroundImage,

                src: customization?.backgroundImage.url,
                alt: customization?.backgroundImage.name,
              }}
            />
            {customization.backgroundImage.color && (
              <div
                {...{
                  className: style.backgroundImageBlock,

                  style: {
                    backgroundColor: customization.backgroundImage.color,
                  },
                }}
              />
            )}
          </>
        )}
        {customization?.logo && (
          <img
            {...{
              className: style.logo,

              src: customization?.logo.url,
              alt: customization?.logo.name,
              style: {
                height: customization?.logo.height || "",
                width: customization?.logo.width || "",
              },
            }}
          />
        )}
        {customization?.icon && customization.withIcon && (
          <div className={style.icon}>
            <img src={customization?.icon} alt="favicon" />
            {customization.withIconLabel && (
              <span
                style={{
                  color: customization.color || theme.palette.grey[800],
                }}
              >
                {customization?.label}
              </span>
            )}
          </div>
        )}
      </a>
      <BookmarkCardButtons />
    </StyledCard>
  );
};

export default BookmarkCard;
