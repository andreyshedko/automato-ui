import { getCurrentPosition } from "./geoposition";

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
