import { writable } from 'svelte/store'
import { supabase } from './supa'

export const nwp_auth = writable(null)
export const nwp_user = writable(null)


const msgBoard = (a, b) => {
	let msg
	switch (a) {
		case 1:
			msg = `Action Succeed! ${b ? b : 'not Defined'}`
			return 
		default:
			msg = `Action Failed! ${b ? b : 'not Defined'}`
			return
	}
	console.log(msg)
}


export const signOut = async () => {
	try {
		let { error } = await supabase.auth.signOut()
		if (error) throw error
		nwp_user.set(null)
		mwp_auth.set(null)
		msgBoard(1, "signOut")
	} catch (error) {
		msgBoard(0, "signOut")
	}
}
export const signUp = async (email, password) => {
	try {
		let { user, error } = await supabase.auth.signUp({ email, password })
		if (error) throw error
		msgBoard(1, "signUp")
	} catch (error) {
		msgBoard(0, "signUp")
	}
}
export const signIn = async (email, password) => {
	try {
		let { user, error } = await supabase.auth.signIn({ email, password })
		if (error) throw error
		nwp_user.set(user)
		msgBoard(1, "signIn")
	} catch (error) {
		msgBoard(0, "signIn")
	}
}
