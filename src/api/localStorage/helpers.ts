import { Bookmark } from '~/store/types';
import { testBookmarks } from '~/testBookmarks';

const BOOKMARK_KEY = 'bookmarks';

const getParsedData = (key: string) =>
  JSON.parse(localStorage.getItem(key) || '');

export const initStorage = () => {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(testBookmarks));
};

export const addBookmark = (bookmark: Bookmark) => {
  const data = getParsedData(BOOKMARK_KEY);

  const newData = { ...data, bookmark };

  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(newData));
};

export const removeBookmark = (id: string) => {
  const data = getParsedData(BOOKMARK_KEY);

  const newData = data.filter((el: Bookmark) => el.id !== id);

  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(newData));
};
