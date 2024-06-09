import { User } from '@auth0/auth0-spa-js'
import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable<User | undefined>(undefined);
export const popupOpen = writable(false);
export const userLocale = writable("en");
export const userCoordinates = writable<GeolocationCoordinates>(undefined);
export const userId = writable<number>(undefined);

export type UserSettings = { locale: string; location: GeolocationCoordinates };

export const saveUser = async (user: User): Promise<number> => {
    // TODO: check if user already exists in database
    user.updated_at = user.updated_at?.replace("Z", "");
	const response  = await fetch(`${import.meta.env.VITE_API_PATH}/user`, {
		method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
		body: JSON.stringify(user)
	});

    return response.status;
};

export const saveCountry = async (userId: User, country: string): Promise<number> => {
	const response  = await fetch(`${import.meta.env.VITE_API_PATH}/user/country`, {
		method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
		body: JSON.stringify({ userId, name: country })
	});

    return response.status;
};

export const getUserLocaleAndLocation = async (
	navigator: Navigator
): Promise<UserSettings> => {

    const location = await getCurrentPosition(navigator);

	const settings: UserSettings = {
		locale: navigator.language.substring(0, 2) ?? 'en',
		location
	};

	return Promise.resolve(settings);
};

export const getUserByEmail = async (email: string): Promise<Record<string, unknown>> => {
	const response  = await fetch(`${import.meta.env.VITE_API_PATH}/user/by/${email}`, {
		method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
	});

    return await response.json();
};

export const getCountryByUserId = async (user_id: number): Promise<Record<string, unknown>> => {
	const response  = await fetch(`${import.meta.env.VITE_API_PATH}/country/by/${user_id}`, {
		method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
	});

    return await response.json();
};

export const getCurrentPosition = (navigator: Navigator): Promise<GeolocationCoordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            // Convert to unknown first because some fields are incompatible due to null values.
            resolve(position.coords);
        }, reject);
    });
}

export const retrieveLocationFromExternalProvider = async (path: string, coordinates: GeolocationCoordinates, locale: string) => {
    const response = await fetch(
        `${path}/countries/${coordinates?.latitude}/${coordinates?.longitude}/${locale}`
    );
    if (!response.ok) {
        return { lat: 0, long: 0 };
    }
    
    return response.json();
}