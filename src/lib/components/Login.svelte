<script>
  import { onMount } from "svelte";
  import auth from "../stores/auth.service";
  import { isAuthenticated, user } from "../stores/auth";

  let auth0Client;
  let newTask;

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

{#if $isAuthenticated}
  <li class="nav-item">
    <a class="nav-link" href="/#" on:click={logout}>Log Out</a>
  </li>
{:else}
  <li class="nav-item">
    <a class="nav-link" href="/#" on:click={login}>Log In</a>
  </li>
{/if}
