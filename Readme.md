# esbuild-plugin-pug

Import plugin for [pug](https://pugjs.org/) (and jade) files for [esbuild](https://esbuild.github.io/)

## Install

```bash
npm i -D esbuild-plugin-pug
```

## Use

```js
const pugPlugin = require('esbuild-plugin-pug');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: "node",
    outfile: 'built/pug.js',
    plugins: [
      pugPlugin()
    ],
  })
  .catch(() => process.exit(1));
```