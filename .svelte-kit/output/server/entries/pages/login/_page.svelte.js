import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "firebase/app";
import "firebase/auth";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<div class="login-form"><h1 data-svelte-h="svelte-1wsy7a9">Login</h1> <form><input type="text" placeholder="Email"${add_attribute("value", email)}> <input type="password" placeholder="Password"${add_attribute("value", password)}> <button type="submit" data-svelte-h="svelte-1yamoz0">Login</button></form> <div data-svelte-h="svelte-1l9lwy7">or</div> <button data-svelte-h="svelte-r7oeti">Login with Google</button> <div data-svelte-h="svelte-10idkgw">Don&#39;t you have an account? <a href="/register">Register</a></div></div>`;
});
export {
  Page as default
};
