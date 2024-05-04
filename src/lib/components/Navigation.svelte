<script lang="ts">
	import { setLocale, t } from '$lib/stores/locales';
	import { isAuthenticated } from '$lib/stores/user';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const login = (): void => {
		dispatch('login');
	};

	const logout = (): void => {
		dispatch('logout');
	};
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src="./roboto.svg" />
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
		<div class="navbar-start">
			<a class="navbar-item" href="/how-it-works">{@html $t('howItWorks')}</a>
			<a  class="navbar-item" href="/prices">{@html $t('prices')}</a>
			<a  class="navbar-item" href="/support">{@html $t('support')}</a>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<span class="icon" aria-controls="dropdown-menu4">
							<i class="gg-globe-alt"></i>
						</span>
					</div>
					<div class="dropdown-menu" id="dropdown-menu4" role="menu">
						<div class="dropdown-content">
							<a href="#" class="dropdown-item" on:click={() => setLocale('en')}>{@html $t('en')}</a
							>
							<a href="#" class="dropdown-item" on:click={() => setLocale('cz')}>{@html $t('cz')}</a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="navbar-item">
				<div class="buttons">
					{#if !$isAuthenticated}
						<button class="button is-light" on:click={login}>{@html $t('login')}</button>
					{:else}
						<button class="button is-light" on:click={logout}>{@html $t('logout')}</button>
						<a class="button" role="button" href="/dashboard">{@html $t('dashboard')}</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>
