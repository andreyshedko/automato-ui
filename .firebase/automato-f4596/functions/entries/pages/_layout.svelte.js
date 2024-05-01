import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { s as session } from "../../chunks/session.js";
import "../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let loading = true;
  let loggedIn = false;
  session.subscribe((cur) => {
    loading = cur?.loading;
    loggedIn = cur?.loggedIn;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav class="navbar" aria-label="main navigation" data-svelte-h="svelte-1gj3r32"><div class="navbar-brand"><a class="navbar-item" href="/"><img src="./roboto.svg" alt="Automato"></a>  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a></div> <div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"></div> <div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-light" href="/login">Log in</a></div></div></div></div></nav> ${loading ? `<div data-svelte-h="svelte-194gxkm">Loading...</div>` : `<div>Logged in: ${escape(loggedIn)} ${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  Layout as default
};
