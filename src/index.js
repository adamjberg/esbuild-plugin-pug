import fs from 'fs';
import pug from "pug";

const pluginPug = () => ({
	name: 'pug',
	setup(build) {
		build.onLoad({ filter: /\.jade$/ }, async args => {
			let template = await fs.promises.readFile(args.path, 'utf8');

      const contents = pug.compile(template)

			return { contents, loader: "text" };
		});
	}
});

export default pluginPug;