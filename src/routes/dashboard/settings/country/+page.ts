import type { PageLoad } from './$types';
import { userLocale, userCoordinates } from '../../../../lib/stores/user';

export const load: PageLoad = async ({ ...args }) => {
	let locale: string;
	userLocale.subscribe((_locale) => (locale = _locale));

	let coordinates;
	userCoordinates.subscribe((_coordinates) => (coordinates = _coordinates));

	let response: Response;
	if (coordinates) {
		response = await fetch(
			`${import.meta.env.VITE_API_PATH}/countries/${coordinates?.latitude}/${coordinates?.longitude}/${locale}`
		);
		if (!response.ok) {
			return { lat: 0, long: 0 };
		}

		return response.json();
	}
};
