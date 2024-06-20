import { get, writable } from "svelte/store";
import { locale } from './locales';
import { user } from './user'

export const languages = writable<[]>([]);
export const locales = writable<[]>([]);
export const currencies = writable<[]>([]);
export const timezones = writable<[]>([]);
export const userRegionalSettings = writable<Record<string, unknown>>(undefined);

export const getLanguages = async (): Promise<void> => {
	const loc = get(locale);
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/languages/${loc}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

    if (response.ok) {
        languages.set(await response.json())
    }
};

export const getLocales = async (): Promise<void> => {
	const loc = get(locale);
	console.log(loc)
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/locales/${loc}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

    if (response.ok) {
        locales.set(await response.json())
    }
};

export const getCurrencies = async (): Promise<void> => {
	const loc = get(locale);
	console.log(loc)
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/currency/${loc}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

    if (response.ok) {
        currencies.set(await response.json())
    }
};

export const getTimeZones = async (): Promise<void> => {
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/timezones`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

    if (response.ok) {
        timezones.set(await response.json())
    }
};

export const loadUserSettings = async (): Promise<void> => {
	const id = get(user);
	console.log(id)
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/user/regional/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

    if (response.ok) {
        userRegionalSettings.set(await response.json())
    }
};