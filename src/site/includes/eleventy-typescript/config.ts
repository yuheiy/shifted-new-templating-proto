let _pathPrefix = "/";

export const EleventyTypeScriptConfig = {
	get pathPrefix() {
		return _pathPrefix;
	},

	set pathPrefix(value: string) {
		_pathPrefix = value;
	},
};
