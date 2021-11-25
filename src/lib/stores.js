import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}
const initMdata = {id: 0, name: 'Info', icon: 'Lorem ipsum dolor elit.'}
export const count = createCount();
export const page = writable(0);
export const isSb = writable(false);
export const isMod = writable(false);
export const dataMod = writable(initMdata);
export const nwp_auth = writable(false);
export const nwp_user = writable(null);
export const nwp_profil = writable(null);
export const alert = writable(null);
// import {count, page, nwp_auth, nwp_user, nwp_profil, isSb} from './lib/stores'