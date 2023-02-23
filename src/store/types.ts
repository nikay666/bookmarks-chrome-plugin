import React from 'react';

export interface BookmarkCustomizationSettings {
  backgroundColor: string;
  backgroundImage: string;
  color: string;
  icon: React.ReactNode;
  withIcon: false;
  withIconLabel: false;
  label: string;
  logo: {
    name: string;
    url: string;
  };
}

export interface Bookmark {
  id: string | number;
  order: number;
  name: string;
  url: string;
  groupID: string;
  customization: BookmarkCustomizationSettings;
}

export interface Group {
  id: string;
  name: string;
  icon: React.ReactNode;
  order: number;
  bookmarks: Bookmark[];
}
