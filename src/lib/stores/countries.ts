import { writable } from "svelte/store";

export type CountriesList = { id: string; alpha2: string; alpha3: string; name: string };
export type KeyValue = { key: string; value: unknown };

export const countryList = writable<string[]>([]);

export const saveCountry = async (
	country_name: string,
	user_id: number
): Promise<Response> => {
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/user/country`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user_id,
			country_name
		})
	});

	return response;
};

export const updateCountry = async (
	country_name: string,
	user_id: number
): Promise<Response> => {
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/user/country`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user_id,
			country_name
		})
	});

	return response;
};

export const deleteCountry = async (
	user_id: number
): Promise<Response> => {
	const response = await fetch(`${import.meta.env.VITE_API_PATH}/user/${user_id}/country`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user_id,
		})
	});

	return response;
};

export const fetchCountries = async (locale: string) => {
	let countries: string[] = [];
	let response = await fetch(`${import.meta.env.VITE_API_PATH}/countries/${locale}`);
	if (response.ok) {
		let resp: CountriesList[] = await response.json();
		countries = resp.map((item) => {
			return item.name;
		});
	}
	countryList.set(countries);
};