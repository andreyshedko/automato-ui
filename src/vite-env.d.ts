/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_API_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export interface $$UserRegionalSettings {
	userId: number;
	site_language: string;
	account_language: string;
	currency: string;
	locale: string;
	apply_tol_all_sites: boolean;
} 
