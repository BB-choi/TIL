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
};
