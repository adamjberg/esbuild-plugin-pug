const pugPlugin = require("../src/index.js");

require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "built/pug.js",
    plugins: [pugPlugin()],
  })
  .catch(() => process.exit(1));
