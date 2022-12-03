const fs = require("fs");
const pug = require("pug");

const pluginPug = () => ({
  name: "pug",
  setup(build) {
    build.onLoad({ filter: /\.(jade|pug)$/ }, async (args) => {
      let template = await fs.promises.readFile(args.path, "utf8");

      const compiled = pug.compileClient(template, {
        filename: args.path,
      });

      const contents = `${compiled}\n\nexport default template;`;

      return { contents, loader: "js" };
    });
  },
});

module.exports = pluginPug;
