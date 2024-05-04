

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C3MDEbPR.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DpWq0RiH.js","_app/immutable/chunks/entry.BeDGvT7n.js"];
export const stylesheets = [];
export const fonts = [];
