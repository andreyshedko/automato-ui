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

export interface Language {
	id: number;
	language_code: string;
	native_language_name: string;
	english_language_name: string;
}

export interface UserRegionalSettings {
	user_id: number;
	site_language: string;
	account_language: string;
	currency: string;
	regional_settings: string;
	time_zone: string;
	apply_to_all_sites: boolean;
} 