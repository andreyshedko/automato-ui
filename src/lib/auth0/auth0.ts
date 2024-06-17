import { isAuthenticated, popupOpen, user } from '../stores/user';
import  { createAuth0Client } from '@auth0/auth0-spa-js'
import config from './config';

export async function createClient() {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
  })

  return auth0Client
}

export async function loginWithPopup(client, options) {
  popupOpen.set(true)
  try {
    await client.loginWithPopup(options);
    const _user = await client.getUser();
    user.set(_user);
    isAuthenticated.set(true);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e)
  } finally {
    popupOpen.set(false)
  }
}

export function logout(client) {
  return client.logout()
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
}

export default auth