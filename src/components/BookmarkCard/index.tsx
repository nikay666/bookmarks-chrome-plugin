import React from 'react';

import classNames from 'classnames';

import { theme } from '~/theme';

import BookmarkCardButtons from './components/BookmarkCardButtons';
import style from './index.module.css';
import { StyledBookmarkCard } from './styles';
import { Bookmark } from './types';

export interface BookmarkCardProps {
  className?: string;
  content: Bookmark;
  width?: string;
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({
  className,
  content,
  width = '',
}) => {
  const { name, url, customization } = content;

  return (
    <StyledBookmarkCard
      {...{
        className: classNames(style.root, className),

        raised: true,
        style: { width },
      }}
    >
      <a
        {...{
          className: style.link,

          'aria-label': name,
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
                height: customization?.logo.height || '',
                width: customization?.logo.width || '',
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
    </StyledBookmarkCard>
  );
};

export default BookmarkCard;
