import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import bookmarkSlice from './bookmark-slice';

/**
 * GroupSlice
 *  getAllGroups: () => groups
 *  getGroup: (state, action) => groups
 *  addGroup: (state, action) => void
 *  removeGroup: (state, action) => void
 *  editGroup: (state, action) => void
 * --------------------
 * BookmarkSlice
 *  getAllBookmark: () => bookmarks
 *  getBookmark: (state, action) => bookmark
 *  addBookmark: (state, action) => void
 *  removeBookmark: (state, action) => void
 *  editBookmark: (state, action) => void
 * -------------------
 * SettingsSlice
 *  getSettingsCongif
 *  editSettingsCongif
 *  importSettingsCongif
 *  exportSettingsCongif
 *
 */

export const store = configureStore({
  reducer: {
    config: bookmarkSlice.reducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;

export type AppDisppatch = typeof store.dispatch;
export const useAppDispatch: () => AppDisppatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
