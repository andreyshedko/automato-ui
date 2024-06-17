// @ts-nocheck
import type { PageLoad } from './$types';
import { userLocale, userCoordinates } from '../../../../lib/stores/user';
import { retrieveLocationFromExternalProvider } from '../../../../lib/stores/user';

export const load = async ({ ...args }: Parameters<PageLoad>[0]) => {
	let locale: string = 'en';
	userLocale.subscribe((_locale) => (locale = _locale));

	let coordinates: GeolocationCoordinates = {
		latitude: 0,
		longitude: 0,
		accuracy: 0,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		speed: null
	};
	userCoordinates.subscribe((_coordinates) => (coordinates = _coordinates));

	if (coordinates) {
		const path = `${(import.meta.env.VITE_API_PATH, coordinates, locale)}`;
		retrieveLocationFromExternalProvider(path, coordinates, locale);
	}
};
