<script lang="ts">
  import { Route, Link, Router } from "svelte-navigator";
  import PrivateRoute from "./PrivateRoute.svelte";
  import Cabinet from "./Cabinet.svelte";
  import Login from "./Login.svelte";
  import Home from "./Home.svelte";
</script>

<Router>
<!-- svelte-ignore a11y-missing-attribute -->
<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="./roboto.svg" />
    </a>

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
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link class="button is-light" to="/login">Log in</Link>
        </div>
      </div>
    </div>
  </div>
</nav>

<Route path="/">
  <Home/>
</Route>
<Route path="login">
  <Login />
</Route>
<PrivateRoute path="cabinet">
  <Cabinet />
</PrivateRoute>
</Router>
