import { User } from '@auth0/auth0-spa-js';

export const saveUser = async (user: User, path: string): Promise<number> => {
    user.updated_at = user.updated_at?.replace("Z", "");
	const response  = await fetch(`${path}/user`, {
		method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
		body: JSON.stringify(user)
	});

    return response.status;
};
