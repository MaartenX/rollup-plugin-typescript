import * as fs from "fs";

/**
 * Creates a compiler host for typescript.
 * @param {ts.CompilerOptions} compilerOptions The compiler options.
 * @param {any} files The files.
 */
export default function createHost (typescript, compilerOptions, files) {
	const defaultHost = typescript.createCompilerHost(compilerOptions);
	const defaultName = defaultHost.getDefaultLibFileName(compilerOptions);
	
	files[defaultName] = {
		sourceFile: typescript.createSourceFile(defaultName, fs.readFileSync(defaultName).toString(), compilerOptions.target ||  typescript.ScriptTarget.ES5),
		importedBy: [],
		imports: []
	};

	return {
		getSourceFile (filename) {
			return files[filename].sourceFile;
		},
		writeFile: defaultHost.writeFile,
		getDefaultLibFileName: defaultHost.getDefaultLibFileName,
		useCaseSensitiveFileNames: defaultHost.useCaseSensitiveFileNames,
		fileExists: (filename) => typeof files[filename] !== "undefined",
		getCanonicalFileName: defaultHost.getCanonicalFileName,
		getCurrentDirectory: defaultHost.getCurrentDirectory,
		getNewLine: defaultHost.getNewLine
	};
}