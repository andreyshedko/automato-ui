import { c as create_ssr_component } from "../../chunks/ssr.js";
import { s as session } from "../../chunks/session.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  session.subscribe((cur) => {
    cur?.loading;
    cur?.loggedIn;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ``;
});
export {
  Page as default
};
