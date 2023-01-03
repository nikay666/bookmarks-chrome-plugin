export interface SettingItem {
  label: string;
  order: number;
  description: string;
  value: string;
}

export interface SettingSection {
  label: string;
  order: number;
  items: SettingItem[];
}

export interface SettingMenuItem {
  id: string;
  label: string;
  url: string;
}
