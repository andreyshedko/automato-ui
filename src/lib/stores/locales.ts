import { derived, writable, type Writable } from 'svelte/store';
import { translations } from "./translations";

const locale: Writable<string> = writable("cz");

export const unsusbcribe = locale;
export const locales = Object.keys(translations);

export const setLocale = (language: string) => {
    locale.set(language);
}

function translate(locale: string, key: string, vars: string): string {
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    let text = translations[locale][key];

    if (!text) throw new Error(`no translation found for ${locale}.${key}`);

    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
    translate($locale, key, vars)
);