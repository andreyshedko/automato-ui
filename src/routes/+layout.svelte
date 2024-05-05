<script lang="ts">
	import '../app.scss';
	import { isAuthenticated, user } from '$lib/stores/user';
	import Navigation from '$lib/components/Navigation.svelte';
	import auth from '$lib/auth0/auth0';
	import { onMount } from 'svelte';
	import type { Auth0Client } from '@auth0/auth0-spa-js';

	// var userLang = navigator.language || navigator.userLanguage;
	// console.log(userLang)

	let auth0Client: Auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		let _isAuthenticated = await auth0Client.isAuthenticated();
		isAuthenticated.set(_isAuthenticated);
		
		let _user = await auth0Client.getUser();
		user.set(_user);
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
