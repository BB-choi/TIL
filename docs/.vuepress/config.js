const util = require("./util");

module.exports = {
  title: "TIL",
  description: "Today I Learned",
  base: "/TIL/",
  head: [["link", { rel: "icon", href: `/images/logo-144.png` }]],
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/bb-choi" }],
    lastUpdated: "마지막 수정일",
    sidebar: [
      {
        title: "2022-04",
        children: util.getFileArr("til", "22-04"),
      },
      {
        title: "Javascript",
        children: util.getFileArr("javascript"),
      },
    ],
  },
};
