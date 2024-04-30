<script lang="ts">
	export let data;
</script>

<h3>Login</h3>
<form method="POST" action="?/{data?.user ? 'signOut' : 'signIn'}">
  <button type="submit">Sign {data?.user ? 'out' : 'in'}</button>
</form>