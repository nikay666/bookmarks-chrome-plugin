import { Bookmark } from "./components/BookmarkCard/types";

export const testBookmarks: Bookmark[] = [
  {
    id: 1,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      // backgroundImage: {},
      color: "",
      icon: "data:image/png;base64,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",
      withIcon: false,
      withIconLabel: false,
      label: "Test",
      logo: {
        name: "test logo",
        url: "https://animego.org/animego/images/logo/logo.png",
      },
    },
  },
  {
    id: 7,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      // backgroundImage: {},
      color: "",
      icon: "data:image/png;base64,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",
      withIcon: true,
      withIconLabel: true,
      label: "Test",
    },
  },
  {
    id: 2,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      backgroundImage: {
        name: "background label",
        url: "https://i.pinimg.com/564x/27/b0/41/27b04138dc48c4d5d433f2c5839203c8.jpg",
        color: "rgba(0, 0, 0, 0.5)",
      },
      color: "",
      icon: "data:image/png;base64,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",
      withIcon: true,
      // image: "",
      label: "",
      logo: {
        name: "test logo",
        url: "https://animego.org/animego/images/logo/logo.png",
      },
    },
  },
  {
    id: 3,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      backgroundImage: {
        name: "background label",
        url: "https://i.pinimg.com/564x/27/b0/41/27b04138dc48c4d5d433f2c5839203c8.jpg",
      },
      color: "",
      icon: "data:image/png;base64,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",
      withIcon: true,
      // image: "",
      label: "Test",
      // logo: {
      //   name: "test logo",
      //   url: "https://animego.org/animego/images/logo/logo.png",
      // },
    },
  },
  {
    id: 4,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      backgroundImage: {
        name: "background label",
        url: "https://i.pinimg.com/564x/27/b0/41/27b04138dc48c4d5d433f2c5839203c8.jpg",
      },
      color: "",
      icon: "",
      // image: "",
      label: "Test",
      logo: {
        name: "test logo",
        url: "https://animego.org/animego/images/logo/logo.png",
      },
    },
  },
  {
    id: 5,
    name: "Test",
    url: "/",
    customization: {
      backgroundColor: "pink",
      backgroundImage: {
        name: "background label",
        url: "https://i.pinimg.com/564x/27/b0/41/27b04138dc48c4d5d433f2c5839203c8.jpg",
      },
      color: "",
      icon: "",
      // image: "",
      label: "Test",
      logo: {
        name: "test logo",
        url: "https://animego.org/animego/images/logo/logo.png",
      },
    },
  },
];
