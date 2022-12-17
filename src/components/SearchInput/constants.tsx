import { SearchMachineInfo, SearchMachineTypes } from "./types";

export const SEARCH_MACHINES: Record<SearchMachineTypes, SearchMachineInfo> = {
  [SearchMachineTypes.google]: {
    name: "google",
    href: "https://www.google.com/search?q=",
  },
  [SearchMachineTypes.yandex]: {
    name: "yandex",
    href: "https://yandex.com/search/?text=",
  },
  [SearchMachineTypes.bing]: {
    name: "bing",
    href: "http://www.bing.com/search?q=",
  },
  [SearchMachineTypes.duckduckgo]: {
    name: "duckduckgo",
    href: "https://duckduckgo.com/?q=",
  },
  [SearchMachineTypes.youtube]: {
    name: "youtube",
    href: "https://www.youtube.com/results?search_query=",
  },
  [SearchMachineTypes.wikipedia]: {
    name: "wikipedia",
    href: "https://ru.wikipedia.org//w/index.php?search=",
  },
};
