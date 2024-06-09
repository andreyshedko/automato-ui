<script lang="ts">
	import '../app.scss';
	import { isAuthenticated, user, userCoordinates, userLocale } from '$lib/stores/user';
	import Navigation from '$lib/components/Navigation.svelte';
	import auth from '$lib/auth0/auth0';
	import { onMount } from 'svelte';
	import type { Auth0Client } from '@auth0/auth0-spa-js';
	import {
		saveUser,
		userId,
		getUserByEmail,
		getUserLocaleAndLocation,
		type UserSettings
	} from '$lib/stores/user';
	import { storable } from '$lib/stores/storable';

	let auth0Client: Auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		let _isAuthenticated = await auth0Client.isAuthenticated();
		isAuthenticated.set(_isAuthenticated);

		user.subscribe(async (user) => {
			if (user) {
				saveUser(user);
				const _user = await getUserByEmail(user.email!);
				userId.set(_user.id as number);
				storable(_user.id).set(_user.id);
			}
		});

		getUserLocaleAndLocation(window.navigator).then((value: UserSettings) => {
			userLocale.set(value.locale);
			userCoordinates.set(value.location);
		});
	});

	function login() {
		auth.loginWithPopup(auth0Client, undefined);
	}

	function logout() {
		auth.logout(auth0Client);
	}
</script>

<Navigation on:login={login} on:logout={logout} />

{#if $isAuthenticated}
	<slot />
{/if}
