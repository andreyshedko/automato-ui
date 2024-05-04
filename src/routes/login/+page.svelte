<script lang="ts">
 import auth from '$lib/auth0/auth0'
  import { isAuthenticated, user } from '$lib/stores/user'
  import { onMount } from 'svelte'

  let auth0Client

  onMount(async () => {
    auth0Client = await auth.createClient()
    isAuthenticated.set(await auth0Client.isAuthenticated())
    user.set(await auth0Client.getUser())
  })

  function login() {
    auth.loginWithPopup(auth0Client)
  }

  function logout() {
    auth.logout(auth0Client)
  }
</script>

<div class="login-form">
	{#if $isAuthenticated}
	<h2>Hey {$user.name}!</h2>
	{#if $user.picture}
	  <img src={$user.picture} alt={user.name} />
	{:else}
	  <img
		src="https://source.unsplash.com/random/400x300"
		alt="Random from unsplash"
	  />
	{/if}
	<button on:click={logout}>Logout</button>
  {:else}
	<button on:click={login}>Login</button>
  {/if}
</div>
