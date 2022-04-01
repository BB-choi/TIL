module.exports = {
  title: "TIL",
  description: "Today I Learned",
  base: "/TIL/",
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/bb-choi" }],
    sidebar: [
      {
        title: "Test",
        children: ["TEST/TEST.md"],
      },
    ],
  },
};
