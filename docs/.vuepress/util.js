const path = require("path");
const fs = require("fs");

module.exports = {
  getFileArr: (dir1, dir2) => {
    const fileList = fs.readdirSync(
      path.join(__dirname, "..", dir1, dir2 ? dir2 : "")
    );
    return fileList.map(
      (el) => `${dir1}${dir2 ? "/" + dir2 : ""}/${el.toString()}`
    );
  },
  getThisMonthArrDesc: () => {
    const thisMonth = "2022-07";
    const thisMonthPages = [];

    for (const page of this.$site.pages) {
      for (const idx in page.frontmatter.tags) {
        if (page.frontmatter.tags[idx] === thisMonth) {
          thisMonthPages.push(page);
        }
      }
    }

    return thisMonthPages.sort((a, b) => b.localeCompare(a));
  },
};
