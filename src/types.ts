export interface User {
	email: string;
	email_verified: boolean;
	family_name: string;
	given_name: string;
	locale: string;
	name: string;
	nickname: string;
	picture: string;
	sub: string;
	updated_at: Date;
}

export type UserSettings = { locale: string; location: GeolocationCoordinates };
export type KeyValue = { key: string; value: unknown };
