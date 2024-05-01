

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3Wu-bglF.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.qCcDgShx.js","_app/immutable/chunks/session.CEIMytGQ.js","_app/immutable/chunks/index.BjqbIcNX.js"];
export const stylesheets = [];
export const fonts = [];
