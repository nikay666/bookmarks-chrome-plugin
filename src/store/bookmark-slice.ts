import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addBookmark, removeBookmark } from '~/api/localStorage';

import { Bookmark } from './types';

const initialState: Bookmark[] = [];

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    getAllBookmark: (state, action) => {
      return state;
    },
    getBookmarkById: (state, action: PayloadAction<string>) => {
      // return state.find(el => el.id === action.payload) ?? [];
    },
    getBookmarksByGroupId: (state, action: PayloadAction<string>) => {
      // return state.filter(el => el.groupID === action.payload);
    },
    getBookmarkGroup: (state, action: PayloadAction<Bookmark>) => {},
    addBookmark: (state, action: PayloadAction<Bookmark>) => {
      state.push(action.payload);
      addBookmark(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.filter(el => el.id !== action.payload);
      removeBookmark(action.payload);
    },
    editBookmark: (state, action) => {},
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice;
