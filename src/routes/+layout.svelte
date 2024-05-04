<script lang="ts">
	import '../app.scss';
	import { isAuthenticated, user } from '$lib/stores/user';
	import Navigation from '$lib/components/Navigation.svelte';
	import auth from '$lib/auth0/auth0';
	import { onMount } from 'svelte';

	// var userLang = navigator.language || navigator.userLanguage; 
	// console.log(userLang)

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});

	function login() {
		auth.loginWithPopup(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}
</script>

<Navigation on:login={login} on:logout={logout} />

{#if $isAuthenticated}
	<slot {user} />
{/if}
