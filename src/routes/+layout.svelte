<script lang="ts">
	import '../app.scss';
	import auth from '$lib/auth0/auth0';
	import { isAuthenticated, user } from '$lib/stores/user'
	import { onMount } from 'svelte';

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

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src="./roboto.svg" alt="Automato" />
		</a>

		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start"></div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a class="button is-light" href="/login">Log in</a>
				</div>
			</div>
		</div>
	</div>
</nav>

{#if $isAuthenticated}
	<h2>Hey {$user.name}!</h2>
	{#if $user.picture}
		<img src={$user.picture} alt={user.name} />
	{:else}
		<img src="https://source.unsplash.com/random/400x300" alt="Random from unsplash" />
	{/if}
	<button on:click={logout}>Logout</button>
{:else}
	<button on:click={login}>Login</button>
{/if}
