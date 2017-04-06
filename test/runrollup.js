const rollup = require("rollup");
const typescript = require("..");

rollup.rollup({
	entry: "sample/import-class/main.ts",
	plugins: [typescript()],
	sourceMap: true
}).then(bundle => {
	return bundle.write({
		dest: "c:\\temp\\test.txt",
		sourceMap: true
	});
}).then(() => {
	debugger;
});