export const saveCountry = async (country: string, path: string): Promise<number> => {
	const response = await fetch(`${path}/country`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});

	return response.status;
};
