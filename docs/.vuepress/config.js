const util = require("./util");

module.exports = {
  title: "TIL",
  description: "Today I Learned",
  base: "/TIL/",
  head: [["link", { rel: "icon", href: `/images/logo-144.png` }]],
  cache: false,
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/bb-choi" }],
    sidebar: [
      {
        title: "2022-08",
        children: util.getFileArr("til", "22-08"),
      },
      {
        title: "2022-07",
        children: util.getFileArr("til", "22-07"),
      },
      {
        title: "2022-05",
        children: util.getFileArr("til", "22-05"),
      },
      {
        title: "2022-04",
        children: util.getFileArr("til", "22-04"),
      },
      {
        title: "JavaScript",
        children: util.getFileArr("javascript"),
      },
    ],
  },
};
