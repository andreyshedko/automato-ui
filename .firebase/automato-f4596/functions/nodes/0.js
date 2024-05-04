import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BzUsODps.js","_app/immutable/chunks/session.CQqZf1Q6.js","_app/immutable/chunks/entry.BeDGvT7n.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DpWq0RiH.js"];
export const stylesheets = ["_app/immutable/assets/0.B45wvDjh.css"];
export const fonts = [];
