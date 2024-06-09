import { Handle } from "@sveltejs/kit";
import { locale } from "./lib/stores/locales";

export const handle: Handle = async({event, resolve}) => {
    let _locale: string;
    locale.subscribe(v => _locale = v);

    return resolve(event, {
        transformPageChunk: ({html}) => html.replace('%locale%', _locale)
    });
}