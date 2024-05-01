export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["roboto.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DawBo6Je.js","app":"_app/immutable/entry/app.4-4bLu7_.js","imports":["_app/immutable/entry/start.DawBo6Je.js","_app/immutable/chunks/entry.B-nE6pOP.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BjqbIcNX.js","_app/immutable/entry/app.4-4bLu7_.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.qCcDgShx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cabinet",
				pattern: /^\/cabinet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
