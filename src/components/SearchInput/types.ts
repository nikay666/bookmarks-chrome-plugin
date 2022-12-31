export enum SearchMachineTypes {
  google = 'google',
  yandex = 'yandex',
  bing = 'bing',
  duckduckgo = 'duckduckgo',
  youtube = 'youtube',
  wikipedia = 'wikipedia',
}

export interface SearchMachineInfo {
  name: string;
  href: string;
}
