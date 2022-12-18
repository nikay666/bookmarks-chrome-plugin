import { ImageLink } from "../../types";

export interface BookmarkCustomization {
  backgroundImage?: ImageLink;
  backgroundColor?: string;

  logo?: ImageLink;

  label?: string;
  color?: string;

  icon?: string;
  withIconLabel?: boolean;

  withIcon?: boolean;
}

export interface Bookmark {
  id: string | number;
  url: string;
  name: string;
  customization: BookmarkCustomization;
}
