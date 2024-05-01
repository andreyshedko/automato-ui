

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cabinet/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cp8FnFF9.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.qCcDgShx.js"];
export const stylesheets = [];
export const fonts = [];
