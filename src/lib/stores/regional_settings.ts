import { get, writable } from 'svelte/store';
import { locale } from './locales';
import { storable } from './storable';

export const languages = writable<[]>([]);
export const locales = writable<[]>([]);
export const currencies = writable<[]>([]);
export const timezones = writable<[]>([]);
export const userRegionalSettings = writable<Record<string, unknown>>(undefined);
let _userId: number;
let _userRegionalSettings: Record<string, unknown>;

storable().subscribe((id) => (_userId = +id));
userRegionalSettings.subscribe((settings) => (_userRegionalSettings = settings));

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
		languages.set(await response.json());
	}
};

export const getLocales = async (): Promise<void> => {
	const loc = get(locale);
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/locales/${loc}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		locales.set(await response.json());
	}
};

export const getCurrencies = async (): Promise<void> => {
	const loc = get(locale);
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/currency/${loc}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		currencies.set(await response.json());
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
		timezones.set(await response.json());
	}
};

export const loadUserSettings = async (): Promise<void> => {
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/user/region/${_userId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	let settings = {
		user_id: undefined,
		site_language: "",
		account_language: "",
		currency: "",
		regional_settings: "",
		time_zone: "",
		apply_to_all_sites: false
	} 	

	if (response.ok) {
		settings = await response.json();
		console.log(settings)
	}

	userRegionalSettings.set(settings);
};

export const saveRegionalSettings = async (settings: Record<string, unknown>): Promise<void> => {
	let method =
		_userRegionalSettings && 'id' in _userRegionalSettings
			? put_regional_settings
			: post_regional_settings;
	method.call(this, settings).then(async (response) => {
		if (await response.ok) {
			userRegionalSettings.set(await response.json());
		}
	});
};

const put_regional_settings = async (settings: Record<string, unknown>) => {
	await fetch(`${import.meta.env.VITE_API_PATH}/user/region`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ ...settings, userId: _userId })
	});
};

const post_regional_settings = async (settings: Record<string, unknown>) => {
	let _settings = { ...settings, user_id: _userId }
	return await fetch(`${import.meta.env.VITE_API_PATH}/user/region`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(_settings)
	});
};
