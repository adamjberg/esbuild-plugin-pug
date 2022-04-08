const fs = require("fs");
const pug = require("pug");

const pluginPug = () => ({
  name: "pug",
  setup(build) {
    build.onLoad({ filter: /\.jade$/ }, async (args) => {
      let template = await fs.promises.readFile(args.path, "utf8");

      const contents = pug.compile(template, { filename: args.path })();

      return { contents, loader: "text" };
    });
  },
});

module.exports = pluginPug;
