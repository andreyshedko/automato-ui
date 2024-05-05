import { User } from '@auth0/auth0-spa-js'
import { writable } from 'svelte/store'

export const isAuthenticated = writable(false)
export const user = writable<User | undefined>(undefined)
export const popupOpen = writable(false)
export const error = writable()